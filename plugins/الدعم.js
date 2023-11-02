let handler = async (m, { conn, command, text }) => {
let love = `
*أهلاً بك/ي يا*
*لدعم البوت تستطيع أن تفعل الآتي:*

✤─────────────────╮

❜❏ دخول قروب الدعم:

▢ https://chat.whatsapp.com/Gv149AqYJyU22AdoDfrU3i
────── • ✨ • ──────
❜❏ متابعة المطور بالانستا:

▢ https://instagram.com/its._ahmad3?igshid=MzMyNGUyNmU2YQ==

*وشكرا لكم يا افضل مستخدمين 🤍🌿*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
