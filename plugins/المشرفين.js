let handler = async (m, { conn, participants, groupMetadata, args }) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './Menu.png'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*الرسالة:* ${pesan}`
let text = `*✪ حضور المشرفين ✪*

${oi}

*المشرفين :*
${listAdmin}

*ملاحظة هذا المنشن فقط يستعمل عند الضرورة 🚀*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['المشرفين <texto>']
handler.tags = ['group']
handler.command = /^(المشرفين|مشرفين|الادمن)$/i
handler.group = true
export default handler
  