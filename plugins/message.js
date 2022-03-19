let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let owner = ('6282245409072@s.whatsapp.net')
  if (m.isGroup) throw false
  let time = user.time + 86400000
  if (new Date - user.time < 86400000) return
  let teks = `
Halo, ${user.name}! Saya adalah bot yang dibuat oleh @${owner.replace(/@.+/,'')}. Saya diciptakan untuk menemani Anda selama menunggu @${owner.replace(/@.+/,'')} online kembali
`.trim()
  conn.send2Button(m.chat, teks, `Silahkan pilih salah satu dari 2 tombol yang tersedia untuk informasi lebih lanjut`, 'Bagaimana cara menggunakan bot ini', '.bantuan', 'Apa saja yang bisa dilakukan oleh bot ini', '.allmenu', {
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '6282245409072@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `Halo, ${user.name}! Saya saat ini sedang offline, silahkan gunakan bot ini dengan bijak yaa!`, 
          "jpegThumbnail": (await conn.getFile('./src/photo/kay.jpg')).data.toString('base64')
        } 
      }
    }, /*m,*/ { 
      thumbnail: (await conn.getFile('./src/photo/kay.jpg')).data.toString('base64')
     })
   global.db.data.users[m.sender].time = new Date *1
     }
  handler.customPrefix = /^(a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z)$/i
  handler.command = new RegExp
  module.exports = handler
  
