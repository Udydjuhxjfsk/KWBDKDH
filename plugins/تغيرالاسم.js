import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*وين الاسم اللي بدك تحطه للقروب 🃏*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*مثال : .تغيير-الاسم لانجا*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغيير-الاسم|تغيرالاسم)$/i
handler.group = true
handler.admin = true
export default handler
