const dir = [
'https://telegra.ph/file/7e67460a5c84f3f1724b3.mp4',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['غوجو', 'عمي'] 

export default handler