import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Senin o 16 haneli şifren
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Marifetix İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #ff6b35;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Adı Soyadı:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <hr />
          <p><strong>Mesaj:</strong><br/>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail başarıyla gönderildi!"); // Terminalde göreceğiz

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("MAİL GÖNDERİM HATASI:", error); // Hatayı terminale yazdıracak
    return NextResponse.json({ success: false, error: "Hata oluştu" }, { status: 500 });
  }
}