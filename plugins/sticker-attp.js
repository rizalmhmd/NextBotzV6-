let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('lol', '/api/attp', 'ee99d6df5f8c5eaf7667a90d', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler
