import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let email: string;

  try {
    const body = await req.json();
    email = body?.email ?? "";
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !email.includes("@") || !email.includes(".")) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[waitlist] RESEND_API_KEY not set — skipping email notification");
    return NextResponse.json({ ok: true });
  }

  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!notificationEmail) {
    console.warn("[waitlist] NOTIFICATION_EMAIL not set — skipping email notification");
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const timestamp = new Date().toISOString();

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: notificationEmail,
      subject: "[TVDE Manager] Nova inscrição na waitlist",
      text: `Email: ${email}\nData: ${timestamp}`,
    });

    if (error) {
      console.error("[waitlist] Resend error:", error);
      return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
