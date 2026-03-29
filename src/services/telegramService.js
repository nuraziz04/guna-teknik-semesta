export const sendTelegramService = async (email, subject, message) => {
    const BOT_TOKEN = "8758675693:AAEc1ixWneskoqlGS1B5iC_ZE"
    const CHAT_ID = "7577213529"

    const text = `
📩 New Message Inbox 📩

📧 From: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
    `

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
        })
    })
}