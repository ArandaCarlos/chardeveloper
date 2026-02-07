import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error('RESEND_API_KEY is not defined');
        return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        console.log(`Intentando enviar mail de ${name} (${email}) para el servicio ${service}`);

        const { data, error } = await resend.emails.send({
            from: 'Char.dev Landing <onboarding@resend.dev>',
            to: ['aranda.carlos.damian@gmail.com'],
            subject: `Nuevo contacto de: ${name} - ${service}`,
            html: `
                <h1>Nuevo Mensaje de Contacto</h1>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Servicio de interés:</strong> ${service}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        console.log('Mail enviado exitosamente:', data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Unexpected Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
