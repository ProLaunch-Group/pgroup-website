import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration: missing API key' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { fullName, email, phone, platform, targetProducts, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !platform) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailContent = `
      <h2>New Affiliate Application Received</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Primary Platform/Channel:</strong> ${platform}</p>
      <p><strong>Target Products to Promote:</strong> ${targetProducts || 'All Ecosystem Products'}</p>
      <br />
      <h3>Additional Application Notes:</h3>
      <p>${(message || 'No additional notes provided.').replace(/\n/g, '<br />')}</p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'ProLaunch Group <info@prolaunchgroup.org>',
      to: [process.env.CAREERS_INBOX_EMAIL || process.env.CENTRAL_INBOX_EMAIL || 'info@prolaunchgroup.org'],
      subject: `New Affiliate Application from ${fullName}`,
      html: emailContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error submitting affiliate application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
