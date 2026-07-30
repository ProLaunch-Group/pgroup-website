import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

function getRecipientEmail(company?: string): string {
  switch (company?.toLowerCase()) {
    case 'prolaunch-technologies':
    case 'tech':
      return process.env.TECH_INBOX_EMAIL || 'tech@prolaunchgroup.org';
    case 'prolaunch-careers':
    case 'careers':
      return process.env.CAREERS_INBOX_EMAIL || 'careers@prolaunchgroup.org';
    case 'prolaunch-academy':
    case 'academy':
      return process.env.ACADEMY_INBOX_EMAIL || 'academy@prolaunchgroup.org';
    default:
      return process.env.CENTRAL_INBOX_EMAIL || 'info@prolaunchgroup.org';
  }
}

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
    const { fullName, email, phone, company, message } = body;

    // Validate inputs
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Determine destination email dynamically based on selected subsidiary
    const recipientEmail = getRecipientEmail(company);

    // Determine the subject based on the selected company
    const subject = company && company !== 'general' 
      ? `New Enquiry for ${company.replace('-', ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}`
      : 'New General Enquiry';

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company/Interest:</strong> ${company || 'General'}</p>
      <br />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'ProLaunch Group <info@prolaunchgroup.org>',
      to: [recipientEmail],
      subject: subject,
      html: emailContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
