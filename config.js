import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//Number of owners
global.owner = [
  ['972568155701', '𝑰𝒕𝒔 𝑨𝒉𝒎𝒂𝒅', true],
  ['972568155701', '𝑰𝒕𝒔 𝑨𝒉𝒎𝒂𝒅', true] // هنا قم بتبديل رقمك واسمك
] 

// Mods
global.mods = ['201144148194','201144148194'] 
global.prems = ['201144148194','201144148194']

// Sticker WM
global.ownername = '𝑰𝒕𝒔 𝑨𝒉𝒎𝒂𝒅'
global.botname = '𝐋𝐚𝐧𝐠𝐚 𝐛𝐨𝐭 🌀🤍'
global.premium = 'false'
global.packname = '𝐋𝐚𝐧𝐠𝐚 𝐛𝐨𝐭 🌀🤍' 
global.author = '𝑰𝒕𝒔 𝑨𝒉𝒎𝒂𝒅' 
global.darco_wa = 'https://chat.whatsapp.com/Har7Z8RPqDO0jZP2FeRApN'


global.APIs = {
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Fun
global.wait = '*⌛ _جاري التنفيذ..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '😊'
global.done = '📃'
global.error = '❌' 
global.xmoji = '☘️' 

global.multiplier = 69 
global.maxwarn = '3' // maxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
