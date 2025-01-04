import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, prenom, email, message } = body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'votre-email@example.com', // L'email où vous voulez recevoir les messages
      subject: 'Nouveau message du formulaire de contact',
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Email envoyé avec succès!' 
    });

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Erreur lors de l\'envoi de l\'email' 
      },
      { status: 500 }
    );
  }
}