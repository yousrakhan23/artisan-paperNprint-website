'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const adminEmail = (process.env.ADMIN_EMAIL || 'info@artisanpapersnprint.com').trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(adminEmail)) {
      console.error('[v0] Invalid ADMIN_EMAIL format:', adminEmail);
      return { success: false, error: 'Email configuration error. Please contact support.' };
    }

    const { data: emailData, error } = await resend.emails.send({
      from: 'Artisan Paper N Print <onboarding@resend.dev>',
      to: adminEmail,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Message from ${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('[v0] Email error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('[v0] Error sending email:', error);
    return { success: false, error: 'An error occurred while sending your message' };
  }
}
