import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !name || !message) {
    return Response.json({ success: false, error: 'All fields required.' }, { status: 400 });
  }

  // Set up transporter (Gmail SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,    
      pass: process.env.SMTP_PASSWORD,  
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `Portfolio Message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ success: false, error: 'Something went wrong.' }, { status: 500 });
  }
}
