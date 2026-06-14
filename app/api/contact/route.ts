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
      from: 'Synthesys Contact Form <hello@synthesyscreate.com>',
      to: 'synthesyscontact@gmail.com',
      replyTo: email,
      subject: `Free Preview Request — ${businessName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; color: #0B0F17;">
          <div style="margin-bottom: 32px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #5B7CFA, #2DE2C0); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">S</div>
              <strong style="font-size: 18px;">Synthesys</strong>
            </div>
            <h2 style="margin: 0 0 8px; font-size: 22px;">New free preview request</h2>
            <p style="margin: 0; color: #6B7280; font-size: 14px;">Someone wants a homepage mockup. 🎉</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 16px; background: #F9FAFB; border-radius: 8px 8px 0 0; border-bottom: 1px solid #E5E7EB;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Name</strong><br>
                <span style="font-size: 16px;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Business</strong><br>
                <span style="font-size: 16px;">${businessName}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Email</strong><br>
                <a href="mailto:${email}" style="font-size: 16px; color: #5B7CFA;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB; border-radius: 0 0 0 0;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Current website</strong><br>
                <span style="font-size: 16px;">${website || 'None provided'}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #F9FAFB; border-radius: 0 0 8px 8px;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Goals</strong><br>
                <p style="font-size: 15px; margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>

          <div style="background: #EEF2FF; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 14px; color: #4338CA;">
              <strong>Next step:</strong> Reply to this email to reach ${name} directly at ${email}.
            </p>
          </div>

          <p style="font-size: 12px; color: #9CA3AF; margin: 0;">
            Sent from the Synthesys contact form · synthesyscontact@gmail.com
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
