import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, message } = body;

    // Validate inputs
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
      from: process.env.RESEND_FROM_EMAIL || 'Acme <onboarding@resend.dev>', // Update this with your verified domain email
      to: [process.env.CENTRAL_INBOX_EMAIL || 'info@prolaunchgroup.org'],
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
