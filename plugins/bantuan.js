let handler = async (m, { conn }) => {
  let owner = ('6282245409072@s.whatsapp.net')
  let teks = `
Cara menggunakan bot ini cukup mudah, Anda hanya cukup memasukkan salah satu dari daftar menu (untuk beberapa menu, diperlukan teks tambahan)

Contoh : 
${usedPrefix}ytmp3 (link)
${usedPrefix}stiker (reply foto atau send foto dengan caption ${usedPrefix}stiker)

Jika Anda masih tidak mengerti, silahkan menunggu @${owner.replace(/@.+/,'')} online
`.trim()
conn.sendButton(m.chat, teks 'Bot ini diciptakan untuk mengisi kegabutan anda sembari menunggu owner saya online kembali', `Apa saja yang bisa dilakukan oleh bot ini`, '.allmenu', {
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
handler.help = ['bantuan']
handler.tags = ['main']
handler.command = /^bantuan$/i
module.exports = handler
