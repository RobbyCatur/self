let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let time = user.time + 86400000
  if (new Date - user.time < 86400000) return
  let owner = ('6282245409072@s.whatsapp.net')
  if (m.isGroup) return
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
     }
  handler.customPrefix = /^a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z$/i
  handler.command = new RegExp
  module.exports = handler

  function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
