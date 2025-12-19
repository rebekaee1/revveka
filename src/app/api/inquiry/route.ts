import { NextResponse } from 'next/server';

interface InquiryData {
  name?: string;
  company?: string;
  contact?: string;
  phone?: string;
  topic?: string;
  details?: string;
  lang?: string;
}

export async function POST(req: Request) {
  try {
    const data: InquiryData = await req.json();
    const { 
      name = '', 
      company = '',
      contact = '', 
      phone = '',
      topic = '', 
      details = '', 
      lang = 'ru' 
    } = data;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdsRaw = process.env.TELEGRAM_CHAT_IDS || process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatIdsRaw) {
      console.error('Missing Telegram configuration');
      // Return success anyway to not block user, but log error
      return NextResponse.json({ ok: true, warning: 'Notification not sent' });
    }

    const chatIds = chatIdsRaw
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    if (chatIds.length === 0) {
      return NextResponse.json(
        { ok: false, error: 'TELEGRAM_CHAT_IDS is empty' },
        { status: 500 }
      );
    }

    const isRu = lang === 'ru';
    const text = [
      `📩 ${isRu ? 'Новый запрос с сайта REVVEKA' : 'New inquiry from REVVEKA website'}`,
      '',
      `👤 ${isRu ? 'Имя' : 'Name'}: ${name || '—'}`,
      company ? `🏢 ${isRu ? 'Компания' : 'Company'}: ${company}` : null,
      `📧 Email: ${contact || '—'}`,
      phone ? `📱 ${isRu ? 'Телефон' : 'Phone'}: ${phone}` : null,
      topic ? `📋 ${isRu ? 'Тема' : 'Topic'}: ${topic}` : null,
      details ? `\n💬 ${isRu ? 'Детали' : 'Details'}:\n${details}` : null,
      '',
      `🌐 ${isRu ? 'Язык' : 'Language'}: ${lang.toUpperCase()}`,
      `⏰ ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join('\n');

    for (const chatId of chatIds) {
      try {
        const telegramRes = await fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              chat_id: chatId, 
              text,
              parse_mode: 'HTML',
            }),
          }
        );

        if (!telegramRes.ok) {
          const errText = await telegramRes.text();
          console.error(`Failed to send to chat ${chatId}:`, errText);
        }
      } catch (chatError) {
        console.error(`Error sending to chat ${chatId}:`, chatError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Inquiry handler error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
