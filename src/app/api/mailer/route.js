import { NextResponse } from'next/server';
import nodemailer from 'nodemailer';

///-- https://app.mailjet.com/account

export async function POST(req, res) {
  try {
    const { name, email, message } = req.body;

    // Configura el transportador de Nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Cambia esto por el host SMTP de tu proveedor
      port: 587, // Generalmente 587 para TLS o 465 para SSL
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER, // Tu usuario de correo
        pass: process.env.EMAIL_PASS, // Tu contraseña de correo
      },
    });

    try {
      // Configura el contenido del correo electrónico
      await transporter.sendMail({
        from: '"Portfolio Contact" <your-email@example.com>', // El remitente del correo
        to: "recipient@example.com", // El destinatario
        subject: "New Contact Form Submission", // El asunto del correo
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // El cuerpo del correo en texto plano
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // El cuerpo del correo en HTML
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    // return NextResponse.json(
    //   { success: true, data: transformedData },
    //   { status: 200 }
    // );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 400 }
    );
  }
}