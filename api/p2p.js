// api/p2p.js — Vercel Serverless Function
// Proxy para el endpoint P2P de Binance (evita CORS desde el browser)
// Uso: /api/p2p?tradeType=BUY&rows=3
//      /api/p2p?tradeType=SELL&rows=3

export default async function handler(req, res) {
  // Solo permitir GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  // Cabeceras CORS — permite cualquier origen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Parámetros desde la query string
  const tradeType = req.query.tradeType === 'SELL' ? 'SELL' : 'BUY';
  const rows      = Math.min(parseInt(req.query.rows) || 3, 20);
  const payTypes  = req.query.payTypes
    ? req.query.payTypes.split(',')
    : ['BANK'];

  const body = {
    asset:     'USDT',
    fiat:      'ARS',
    tradeType: tradeType,
    page:      1,
    rows:      rows,
    payTypes:  payTypes
  };

  try {
    const response = await fetch(
      'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search',
      {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent':   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          'Accept':       'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('Binance P2P error ' + response.status + ':', text);
      return res.status(response.status).json({
        error:  'Binance respondio con ' + response.status,
        detail: text
      });
    }

    const data = await response.json();

    // Cache de 20 segundos (el dashboard refresca cada 30s)
    res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=10');
    return res.status(200).json(data);

  } catch (err) {
    console.error('Error en proxy P2P:', err);
    return res.status(500).json({
      error:  'Error interno del proxy',
      detail: err.message
    });
  }
}
