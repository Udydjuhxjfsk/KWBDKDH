let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('*❈↲ تم تعديل الوصف بنجاح*')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^tighiralwsf|تغيرالوصف|تغيير-الوصف$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
