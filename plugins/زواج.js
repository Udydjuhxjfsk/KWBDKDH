let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`_~*طـلـب زواج 💍*~_

*[ لـقـد تـهـت فـ بـحـر عـيـنـيـك واريـدك انـتـ/ـي فـقـط لا غـيـر ]*
✠ ━━ • ━ ⟨💍⟩ ━ • ━━ ✠

*~_انـا_~*
*~_اطـلـب يـدك يـا:〘  ${toM(a)}  〙_~*

✠ ━━ • ━ ⟨💍⟩ ━ • ━━ ✠

*_رسـالـتـي لـك:〘هل تقبل؟〙_*

*ولـك حـريـة الـقـبـول او الـرفـض*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','زواج']
handler.group = true
export default handler

