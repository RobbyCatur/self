let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let owner = ('6282245409072@s.whatsapp.net')
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
  handler.customPrefix = /^@6282245409072$/i
  handler.command = new RegExp
  module.exports = handler