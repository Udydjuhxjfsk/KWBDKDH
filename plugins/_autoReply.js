export async function all(m) {
// عندما يرسل شخص ما رابط مجموعة إلى رسائل الخاصة للبوت/
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {

m.reply(`*دعوة البوت للانضمام إلى مجموعة*

مرحبًا 
يمكنك دعوة البوت للانضمام إلى مجموعة ولكن تواصل مع المالك باستخدام امر:
.المطور
`)
m.react('💎')
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}

return !0
}