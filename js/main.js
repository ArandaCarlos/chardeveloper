(function () {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const wait = ms => new Promise(r => setTimeout(r, reduced ? 0 : ms));

  /* ── TÍTULO: palabras que entran una por una ── */
  $$('.split').forEach(el => {
    const out = [];
    el.childNodes.forEach(node => {
      const isEm = node.nodeName === 'EM';
      node.textContent.split(/\s+/).filter(Boolean).forEach(word => {
        out.push(isEm ? `<em>${word}</em>` : word);
      });
    });
    el.innerHTML = out.map((w, i) =>
      `<span class="w"><span style="transition-delay:${i * 45}ms">${w}</span></span>`
    ).join(' ');
    requestAnimationFrame(() => setTimeout(() => el.classList.add('on'), 80));
  });

  /* ── REVEAL AL SCROLLEAR ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.rv').forEach(el => io.observe(el));

  /* ── NAV, PROGRESO, WHATSAPP FLOTANTE, PASOS ── */
  const nav = $('#nav');
  const progress = $('#progress');
  const waFloat = $('.wa-float');
  const steps = $('#steps');
  const stepItems = $$('.stp');
  const navLinks = $$('.nav-links a');
  const sections = navLinks.map(a => $(a.getAttribute('href')));

  function onScroll() {
    const y = scrollY;
    const h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('stuck', y > 30);
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    waFloat.classList.toggle('show', y > innerHeight * .7);

    if (steps) {
      const r = steps.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * .75 - r.top) / (r.height + innerHeight * .25)));
      steps.style.setProperty('--p', p.toFixed(3));
      stepItems.forEach((s, i) => s.classList.toggle('lit', p >= i / stepItems.length));
    }

    let current = null;
    sections.forEach((sec, i) => {
      if (sec && sec.getBoundingClientRect().top < innerHeight * .4) current = navLinks[i];
    });
    navLinks.forEach(a => a.classList.toggle('active', a === current));
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── MENÚ MOBILE ── */
  const burger = $('#burger');
  const mob = $('#mob');
  function setMenu(open) {
    mob.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => setMenu(!mob.classList.contains('open')));
  $$('a', mob).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ── SPOTLIGHT EN TARJETAS ── */
  if (finePointer) {
    $$('.spot').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ── PANEL DEL HERO: inclinación 3D ── */
  const tilt = $('#tilt');
  const heroVisual = $('#heroVisual');
  if (tilt && finePointer && !reduced) {
    heroVisual.addEventListener('pointermove', e => {
      const r = heroVisual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      tilt.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    heroVisual.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
  }

  /* ── BOTÓN MAGNÉTICO ── */
  if (finePointer && !reduced) {
    $$('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * .18}px, ${y * .3}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* ── CONTADORES ── */
  function countUp(el) {
    const end = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = reduced ? 0 : 1600;
    const t0 = performance.now();
    (function frame(t) {
      const k = dur ? Math.min(1, (t - t0) / dur) : 1;
      const eased = 1 - Math.pow(1 - k, 4);
      el.textContent = Math.round(end * eased) + suffix;
      if (k < 1) requestAnimationFrame(frame);
    })(t0);
  }
  $$('[data-count]').forEach(el => setTimeout(() => countUp(el), 500));

  /* ── FEED EN VIVO ── */
  const feed = $('#feed');
  const events = [
    { i: '✓', c: '201,146,0', t: 'Pregunta respondida', s: 'MercadoLibre · “¿Hacen factura A?”', v: '9 s' },
    { i: '↺', c: '14,159,98', t: 'Carrito recuperado', s: 'Recordatorio por WhatsApp', v: '+$52.900' },
    { i: '⇄', c: '123,77,255', t: 'Stock sincronizado', s: 'Buzo frisa gris · 3 canales', v: '12 → 11' },
    { i: '➜', c: '22,163,74', t: 'Aviso de envío', s: 'Pedido #1043 · Sofía M.', v: 'en camino' },
    { i: '★', c: '242,98,42', t: 'Clienta volvió a comprar', s: 'Mensaje de recompra · 60 días', v: '+$18.400' },
    { i: '%', c: '63,85,221', t: 'Promo aplicada', s: 'Línea invierno · 248 publicaciones', v: '−20%' },
    { i: '✓', c: '225,48,108', t: 'Consulta por Instagram', s: '“¿Tienen local?” · respondida', v: '14 s' },
  ];
  let evIdx = 0;
  function pushEvent() {
    const e = events[evIdx++ % events.length];
    const li = document.createElement('li');
    li.innerHTML = `<span class="ico" style="background:rgba(${e.c},.12);color:rgb(${e.c})">${e.i}</span>
      <span class="t"><strong>${e.t}</strong><small>${e.s}</small></span>
      <span class="v">${e.v}</span>`;
    feed.prepend(li);
    while (feed.children.length > 5) feed.lastElementChild.remove();
  }
  if (feed) {
    for (let k = 0; k < 4; k++) pushEvent();
    [...feed.children].forEach(li => { li.style.animation = 'none'; });
    if (!reduced) {
      let feedTimer = setInterval(pushEvent, 2600);
      document.addEventListener('visibilitychange', () => {
        clearInterval(feedTimer);
        if (!document.hidden) feedTimer = setInterval(pushEvent, 2600);
      });
    }
  }

  /* ── STOCK SINCRONIZADO ── */
  const stockNums = $$('.stk-n');
  const saleTag = $('#stkSale');
  if (stockNums.length && !reduced) {
    let units = 12;
    let stockTimer = null;
    const channels = ['Venta en MercadoLibre', 'Venta en Tienda Nube', 'Venta en el local'];
    async function sale() {
      units = units <= 3 ? 12 : units - 1;
      saleTag.textContent = channels[Math.floor(Math.random() * channels.length)];
      saleTag.classList.add('show');
      await wait(500);
      stockNums.forEach((n, i) => setTimeout(() => {
        n.textContent = units;
        n.classList.remove('tick'); void n.offsetWidth; n.classList.add('tick');
      }, i * 120));
      await wait(1400);
      saleTag.classList.remove('show');
    }
    new IntersectionObserver(([e]) => {
      clearInterval(stockTimer);
      if (e.isIntersecting) stockTimer = setInterval(sale, 3200);
    }).observe(stockNums[0].closest('.viz'));
  }

  /* ── DEMO DEL AGENTE ── */
  const chatBody = $('#chatBody');
  const chips = $$('#chatChips button');
  const answers = {
    ventas: {
      text: 'Esta semana van <b>142 ventas</b> por <b>$6.840.000</b>, un 18% más que la semana pasada. El mejor día fue el martes, cuando arrancó la promo de 3 cuotas.',
      card: () => {
        const d = [['L', 14], ['M', 31], ['M', 22], ['J', 19], ['V', 24], ['S', 18], ['D', 14]];
        const max = Math.max(...d.map(x => x[1]));
        return `<div class="bars">${d.map(([l, v]) =>
          `<div class="${v === max ? 'hi' : ''}"><span data-h="${(v / max) * 100}"></span><small>${l}</small></div>`
        ).join('')}</div>`;
      }
    },
    carritos: {
      text: 'Se abandonaron <b>63 carritos</b> esta semana y el recordatorio automático ya recuperó <b>11</b>. Quedan 9 carritos de más de $80.000: ¿querés que les mande un cupón del 10%? Te muestro el mensaje antes de enviarlo.',
      card: () => `<div class="mini-stats">
          <div><strong>63</strong><small>abandonados</small></div>
          <div><strong style="color:var(--green)">11</strong><small>recuperados</small></div>
          <div><strong>$512k</strong><small>recuperado</small></div>
        </div>`
    },
    stock: {
      text: 'Hay <b>3 productos</b> con menos de 5 unidades. Al ritmo de esta semana, la remera oversize negra se agota el jueves.',
      card: () => `<div class="stock-list">
          <div><span>Remera oversize negra</span><span class="bar"><i style="width:18%"></i></span><b>3 u.</b></div>
          <div><span>Buzo frisa gris · M</span><span class="bar"><i style="width:24%"></i></span><b>4 u.</b></div>
          <div><span>Jogger cargo verde · L</span><span class="bar"><i style="width:24%"></i></span><b>4 u.</b></div>
        </div>`
    },
    preguntas: {
      text: 'Hoy entraron <b>87 preguntas</b> en MercadoLibre. <b>79</b> se respondieron solas, en 40 segundos promedio. Las otras 8 necesitaban a alguien del equipo: te las dejé marcadas.',
      card: () => `<div class="mini-stats">
          <div><strong>87</strong><small>preguntas</small></div>
          <div><strong style="color:var(--green)">79</strong><small>respondidas solas</small></div>
          <div><strong style="color:var(--amber)">8</strong><small>para tu equipo</small></div>
        </div>`
    }
  };

  let chatBusy = false;
  let chatStarted = false;

  function addMsg(cls, html) {
    const m = document.createElement('div');
    m.className = `msg ${cls}`;
    m.innerHTML = html;
    chatBody.appendChild(m);
    chatBody.scrollTop = chatBody.scrollHeight;
    return m;
  }

  async function ask(key, btn) {
    if (chatBusy || !answers[key]) return;
    chatBusy = true;
    chatStarted = true;
    chips.forEach(c => { c.disabled = true; });

    addMsg('me', btn.textContent);
    await wait(450);
    const typing = addMsg('bot typing', '<i></i><i></i><i></i>');
    await wait(1300);
    typing.remove();

    const a = answers[key];
    const m = addMsg('bot', '');
    const words = a.text.split(' ');
    for (let i = 0; i < words.length; i++) {
      m.innerHTML = words.slice(0, i + 1).join(' ');
      chatBody.scrollTop = chatBody.scrollHeight;
      await wait(28);
    }
    m.innerHTML = a.text + `<div class="msg-card">${a.card()}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
    requestAnimationFrame(() => {
      $$('.bars span', m).forEach((s, i) => setTimeout(() => { s.style.height = s.dataset.h + '%'; }, i * 70));
    });

    btn.classList.add('used');
    chatBusy = false;
    chips.forEach(c => { c.disabled = false; });
  }

  chips.forEach(btn => btn.addEventListener('click', () => ask(btn.dataset.q, btn)));

  const chat = $('#chat');
  if (chat) {
    new IntersectionObserver(([e], obs) => {
      if (e.isIntersecting) {
        obs.disconnect();
        setTimeout(() => { if (!chatStarted) ask('ventas', chips[0]); }, 900);
      }
    }, { threshold: .5 }).observe(chat);
  }

  /* ── MODAL DE PROYECTOS ── */
  const projects = {
    promoml: {
      kind: 'Promociones masivas · MercadoLibre',
      name: 'PromoML',
      desc: 'Lo armé para un cliente que vende en MercadoLibre con más de 2.000 publicaciones. MercadoLibre no le dejaba agrupar productos para sumarlos a una promo, así que cada vez que se adhería a una nueva tenía que elegirlos uno por uno, y se le iban horas. Ahora filtra por categoría, precio o stock, arma el grupo y lo aplica de una sola vez. Antes de tocar un precio muestra una vista previa, y cuando termina una campaña la vuelve a lanzar con un click.',
      tags: ['+2.000 publicaciones', 'Promos en bloque', 'Vista previa antes de aplicar', 'Campañas clonables'],
      link: 'https://promo.chardeveloper.com.ar/',
      images: ['images/promoml/promo1.png', 'images/promoml/promo2.png', 'images/promoml/promo3.png']
    },
    hardex: {
      kind: 'Marketplace · Hardware certificado',
      name: 'Hardex',
      desc: 'El primer exchange de hardware en Argentina. El vendedor elige su modelo y el estado del equipo, y en el momento recibe un rango de oferta. Después lo envía, se testea y se publica certificado en el marketplace. Cada venta tiene su seguimiento paso a paso, de la revisión al pago, y un panel interno para gestionar cotizaciones, inventario y finanzas.',
      tags: ['Cotización en 2 min', 'Hardware 100% testeado', 'Seguimiento paso a paso', 'Panel de gestión'],
      link: 'https://hardex.vercel.app/',
      images: ['images/hardex/hardex1.png', 'images/hardex/hardex3.png']
    },
    presupuestosya: {
      kind: 'Producto propio · Suscripciones',
      name: 'Presupuestos Ya',
      desc: 'Herramienta para que profesionales armen presupuestos prolijos en un minuto y los compartan con un link. Incluye firma del cliente y cobro de suscripción automático.',
      tags: ['Presupuesto en 60 s', 'Cobro automático', 'Link para compartir'],
      link: 'https://presupuestosya.app',
      images: ['images/prespuestosya/pya1.png', 'images/prespuestosya/pya2.png', 'images/prespuestosya/pya3.png', 'images/prespuestosya/pya4.png']
    }
  };

  const modal = $('#modal');
  const sTrack = $('#sTrack');
  const sDots = $('#sDots');
  let cur = 0, total = 0, lastFocus = null;

  function go(n) {
    cur = (n + total) % total;
    sTrack.style.transform = `translateX(-${cur * 100}%)`;
    $$('button', sDots).forEach((d, i) => d.classList.toggle('on', i === cur));
  }

  function openModal(id) {
    const p = projects[id];
    if (!p) return;
    lastFocus = document.activeElement;
    $('#mKind').textContent = p.kind;
    $('#mName').textContent = p.name;
    $('#mDesc').textContent = p.desc;
    $('#mTags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
    const link = $('#mLink');
    link.hidden = !p.link;
    if (p.link) link.href = p.link;

    sTrack.innerHTML = p.images.map((src, i) => `<img src="${src}" alt="${p.name}, captura ${i + 1}">`).join('');
    sDots.innerHTML = p.images.map((_, i) => `<button aria-label="Imagen ${i + 1}"></button>`).join('');
    $$('button', sDots).forEach((d, i) => d.addEventListener('click', () => go(i)));
    total = p.images.length;
    const multi = total > 1;
    $('#sPrev').hidden = $('#sNext').hidden = !multi;
    go(0);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  $$('[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); }
    });
  });
  $('#modalClose').addEventListener('click', closeModal);
  $('#mTalk').addEventListener('click', closeModal);
  $('#sPrev').addEventListener('click', () => go(cur - 1));
  $('#sNext').addEventListener('click', () => go(cur + 1));
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') go(cur - 1);
    if (e.key === 'ArrowRight') go(cur + 1);
  });

  /* ── FORMULARIO ── */
  const form = $('#contactForm');
  const status = $('#formStatus');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';

      const required = $$('[required]', form);
      required.forEach(f => f.classList.toggle('invalid', !f.value.trim()));
      const firstBad = required.find(f => !f.value.trim());
      if (firstBad) {
        status.classList.add('err');
        status.textContent = 'Completá tu nombre, cómo contactarte y qué te está pasando.';
        firstBad.focus();
        return;
      }

      const btn = $('button[type="submit"]', form);
      const prev = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      const data = new FormData(form);
      const plataformas = data.getAll('plataformas');
      data.delete('plataformas');
      data.append('plataformas', plataformas.length ? plataformas.join(', ') : 'No indicó');

      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || 'Error');
        form.innerHTML = `<div class="form-done">
          <div class="big">✓</div>
          <h3>¡Listo, lo recibí!</h3>
          <p>En breve te escribo. Si es urgente, mandame un WhatsApp.</p>
        </div>`;
      } catch (err) {
        status.classList.add('err');
        status.textContent = 'No se pudo enviar. Probá de nuevo o escribime directo por WhatsApp.';
        btn.disabled = false;
        btn.innerHTML = prev;
      }
    });
    $$('[required]', form).forEach(f => f.addEventListener('input', () => f.classList.remove('invalid')));
  }
})();
