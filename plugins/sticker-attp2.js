import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/ttp2?apikey=357d3c85079c4e0818731e6b&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['attp2 <teks>']
handler.tags = ['sticker' , 'premium']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = true

export default handler
