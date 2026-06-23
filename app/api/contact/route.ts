import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, company, email, phone, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'VTH Group Website <onboarding@resend.dev>',
      to: 'y.bosshard@vthinvest.ch',
      reply_to: email,
      subject: `[Website Enquiry] ${subject || 'General'} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
          <div style="border-top: 3px solid #C9A96E; padding: 32px 0 8px;">
            <h2 style="font-size: 18px; margin: 0 0 4px;">New enquiry via VTH Group website</h2>
            <p style="font-size: 12px; color: #888; margin: 0;">Received via vthinvest.ch/contact</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #666; width: 130px;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #666;">Company</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;">${company}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #666;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;"><a href="mailto:${email}" style="color: #C9A96E;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #666;">Phone</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;">${phone}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 12px; color: #666;">Enquiry type</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px;">${subject || '—'}</td></tr>
          </table>
          <div style="background: #f8f6f0; padding: 20px; margin-top: 8px;">
            <p style="font-size: 12px; color: #666; margin: 0 0 8px;">Message</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #aaa; margin-top: 32px;">VTH Management AG · Bahnhof-Park 2 · 6340 Baar · Switzerland</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
