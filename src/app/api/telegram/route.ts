import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials missing in environment variables.");
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const { name, phone, model, problem, note } = data;

    const message = `
🔥 <b>Yangi Buyurtma! (Malika Ustasi)</b>

👤 <b>Mijoz:</b> ${name || 'Kiritilmadi'}
📱 <b>Raqam:</b> ${phone || 'Kiritilmadi'}
📞 <b>Qurilma:</b> ${model || 'Kiritilmadi'}
🛠 <b>Muammo:</b> ${problem || 'Kiritilmadi'}
💬 <b>Qo'shimcha izoh:</b> ${note || "Yo'q"}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Telegram API Error:", errorData);
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
