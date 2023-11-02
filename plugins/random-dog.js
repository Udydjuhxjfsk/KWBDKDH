import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://api.thedogapi.com/v1/images/search')
let img = await res.json()
let caption = `عو 🐕`.trim()
conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m)
} catch {
throw '*Error!*'
}}
handler.help = ['dog']
handler.tags = ['random']
handler.command = /^كلب$/i
handler.fail = null
export default handler
// https://api.thedogapi.com/v1/images/search