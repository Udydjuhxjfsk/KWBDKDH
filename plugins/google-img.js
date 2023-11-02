import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `للإستخدام *مثال*: ${usedPrefix}${command} Langa`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `*~𝕷𝖆𝖓𝖌𝖆 𝖇𝖔𝖙~*
🔎 البحث عن: *${text}*
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = ['صوره','صورة']
///
export default handler
