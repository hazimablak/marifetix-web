import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Marifetix İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a; max-width: 600px; border: 1px solid #f0f0f0; border-radius: 12px;">
          <h2 style="color: #ff6b35; margin-bottom: 20px;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Adı Soyadı:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mesaj:</strong></p>
          <p style="white-space: pre-wrap; background-color: #fcfcfc; padding: 15px; border-radius: 8px; border: 1px solid #f0f0f0;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Nodemailer: Mail başarıyla gönderildi!");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("MAİL GÖNDERİM HATASI:", error);
    return NextResponse.json({ success: false, error: "Hata oluştu" }, { status: 500 });
  }
}