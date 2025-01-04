import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,  // Si tu utilises TLS (port 587), laisse cette valeur à false
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendEmail = async (name: string, prenom: string, email: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // C'est l'email que tu utiliseras pour envoyer
    to: 'jujutsu.cregy@gmail.com', // L'email où tu veux recevoir les messages
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

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};
