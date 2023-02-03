import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) return m.reply(`Masukan Url TikTok !`)
   let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
  if (!res.ok) throw await res.text()
let json = await res.json()
    conn.sendHydrated(m.chat, `Cara Simpan\n\n1. Download Dulu Vidio Nya Kalau Sudah\n2. Masuk Ke Dalam Vidio Nya\n3. Lalu Tekan Titik3 Pojok Kanan Atas\n4. Lalu Pilih Yang Ada Bacaan  Simpan ` : ''}`, await (await fetch(url)).buffer(),
        url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`],
        [null, null]], m)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

export default handler
