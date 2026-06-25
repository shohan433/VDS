import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subjectLabels: Record<string, string> = {
      "ui-ux": "UI/UX Design",
      "web-dev": "Web Development",
      "branding": "Branding & Identity",
      "digital-marketing": "Digital Marketing",
      "other": "Other",
    };

    const subjectLabel = subjectLabels[subject] ?? subject;

    await transporter.sendMail({
      from: `"VDS Contact Form" <${process.env.SMTP_USER}>`,
      to: "info@virtualdigitalsolution.com",
      replyTo: email,
      subject: `[VDS Contact] ${subjectLabel} — from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #050b16; color: #f8fafc; max-width: 600px; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0e1628 0%, #121f3d 100%); padding: 36px 40px 28px; border-bottom: 1px solid rgba(56,189,248,0.15);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 10px rgba(34,211,238,0.6);"></div>
              <span style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #22d3ee; font-weight: 600;">New Contact Request</span>
            </div>
            <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #f8fafc; line-height: 1.3;">
              ${subjectLabel}
            </h1>
            <p style="margin: 6px 0 0; color: #94a3b8; font-size: 14px;">Received via virtualdigitalsolution.com</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px;">
            <!-- Sender info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;">Name</span><br/>
                  <span style="font-size: 15px; color: #e2e8f0; font-weight: 500; margin-top: 4px; display: block;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;">Email</span><br/>
                  <a href="mailto:${email}" style="font-size: 15px; color: #22d3ee; text-decoration: none; margin-top: 4px; display: block;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;">Subject</span><br/>
                  <span style="font-size: 15px; color: #e2e8f0; font-weight: 500; margin-top: 4px; display: block;">${subjectLabel}</span>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 20px 24px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; display: block; margin-bottom: 10px;">Message</span>
              <p style="margin: 0; font-size: 15px; color: #cbd5e1; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #22d3ee; color: #0a0f1a; font-weight: 700; font-size: 14px; padding: 12px 32px; border-radius: 999px; text-decoration: none;">
                Reply to ${name}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #475569;">
              This email was sent from the contact form at <strong style="color: #94a3b8;">virtualdigitalsolution.com</strong>
            </p>
          </div>
        </div>
      `,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subjectLabel}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
