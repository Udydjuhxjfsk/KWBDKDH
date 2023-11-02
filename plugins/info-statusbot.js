//import fs from 'fs';
//let fs = require('fs')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let user = global.db.data.users[who]
let anu = `
🏦 Bank *${user.name}*
⭐ Role : ${user.role}\n\n
*${user.exp}* اكس بي ✨
*${user.limit}* الألماس 📊
*${user.money}* مال 💵`
      m.reply(anu) 
}
handler.help = ['bank', 'dompet', 'dompet @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|بنكي)$/i


export default handler