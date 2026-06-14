import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, businessName, website, email, message } = body

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim() || !businessName?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY?.replace(/^﻿/, '').trim()

    // No Resend key — return success so the client-side mailto fallback runs
    if (!apiKey) {
      return NextResponse.json({ success: true, fallback: true })
    }

    const resend = new Resend(apiKey)

    const sendResult = await resend.emails.send({
      from: 'On Call Coffee <hello@oncallcoffee.com>',
      to: 'hello@oncallcoffee.com',
      replyTo: email,
      subject: `Consultation Request — ${businessName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0A0806; color: #F0E8DB;">
          <div style="margin-bottom: 32px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #C4923E, #D4B896); display: flex; align-items: center; justify-content: center; color: #0A0806; font-weight: 700;">☕</div>
              <strong style="font-size: 18px; color: #F0E8DB;">On Call Coffee</strong>
            </div>
            <h2 style="margin: 0 0 8px; font-size: 22px; color: #F0E8DB;">New consultation request</h2>
            <p style="margin: 0; color: #7A6E60; font-size: 14px;">Someone wants to talk coffee. ☕</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 16px; background: #111009; border-radius: 8px 8px 0 0; border-bottom: 1px solid #252018;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #7A6E60;">Name</strong><br>
                <span style="font-size: 16px; color: #F0E8DB;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #111009; border-bottom: 1px solid #252018;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #7A6E60;">Business / Occasion</strong><br>
                <span style="font-size: 16px; color: #F0E8DB;">${businessName}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #111009; border-bottom: 1px solid #252018;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #7A6E60;">Email</strong><br>
                <a href="mailto:${email}" style="font-size: 16px; color: #C4923E;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #111009; border-bottom: 1px solid #252018;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #7A6E60;">Website / Instagram</strong><br>
                <span style="font-size: 16px; color: #F0E8DB;">${website || 'Not provided'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #111009; border-radius: 0 0 8px 8px;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #7A6E60;">What they're looking for</strong><br>
                <p style="font-size: 15px; margin: 8px 0 0; white-space: pre-wrap; color: #F0E8DB;">${message}</p>
              </td>
            </tr>
          </table>

          <div style="background: rgba(196,146,62,0.12); border-radius: 8px; padding: 16px; margin-bottom: 24px; border: 1px solid rgba(196,146,62,0.25);">
            <p style="margin: 0; font-size: 14px; color: #C4923E;">
              <strong>Next step:</strong> Reply to this email to reach ${name} directly at ${email}.
            </p>
          </div>

          <p style="font-size: 12px; color: #7A6E60; margin: 0;">
            Sent from the On Call Coffee contact form · hello@oncallcoffee.com
          </p>
        </div>
      `,
    })

    if (sendResult.error) {
      console.error('Resend error:', JSON.stringify(sendResult.error))
      return NextResponse.json(
        { error: 'Failed to send message', detail: sendResult.error },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Contact form error:', message)
    return NextResponse.json(
      { error: 'Failed to send message', detail: message },
      { status: 500 }
    )
  }
}
