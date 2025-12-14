import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { contact = "", topic = "", details = "", lang = "en" } =
      (await req.json()) ?? {};

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdsRaw = process.env.TELEGRAM_CHAT_IDS || process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatIdsRaw) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS/TELEGRAM_CHAT_ID",
        },
        { status: 500 },
      );
    }

    const chatIds = chatIdsRaw
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    if (chatIds.length === 0) {
      return NextResponse.json(
        { ok: false, error: "TELEGRAM_CHAT_IDS is empty" },
        { status: 500 },
      );
    }

    const text = [
      `Confidential inquiry (${lang})`,
      `Contact: ${contact || "—"}`,
      `Topic: ${topic || "—"}`,
      `Details: ${details || "—"}`,
    ].join("\n");

    for (const chatId of chatIds) {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        },
      );

      if (!telegramRes.ok) {
        const errText = await telegramRes.text();
        return NextResponse.json(
          { ok: false, error: errText },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry notify error", error);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 },
    );
  }
}

