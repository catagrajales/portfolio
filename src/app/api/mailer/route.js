import { Client } from 'node-mailjet';
import { NextResponse } from'next/server';

const MAILJET_EMAIL = process.env.MAILJET_EMAIL;

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY
});

export async function POST(req, res) {
  const body = await req.json();
  const { name, email, message } = body;

  const data = {
    Messages: [
      {
        From: {
          Email: MAILJET_EMAIL,
          Name: 'Catalina Grajales'
        },
        To: [
          {
            Email: MAILJET_EMAIL,
            Name: 'Catalina Grajales'
          },
        ],
        Subject: 'New Contact Form Submission',
        TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        HTMLPart: `<p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`,
      },
    ],
  };

  
  try {
    const result = await mailjet
            .post('send', { version: 'v3.1' })
            .request(data);
  
    const { Status } = result.body.Messages[0];

    return NextResponse.json(
      { success: true, data: Status },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}