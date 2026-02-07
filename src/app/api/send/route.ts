import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        const data = await resend.emails.send({
            from: 'Char.dev Landing <onboarding@resend.dev>', // Use the default Resend testing domain or a verified domain
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

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
