import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭─[𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝐁𝐎𝐓]───╮
 | 
│╭────────────────────
┴│❖ Hey there, ${conn.getName(m.sender)}!
⬡│❖ I\'m 𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝐁𝐎𝐓\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│   > 𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝐁𝐎𝐓
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 𝐀𝐑𝐋𝐎𝐃𝐑𝐀𝐆𝐎𝐍
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254702713600
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ *HOW TO USE* ]────⋆
┴│💡 *Some commands you can use:*
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
││ 𝐓𝐘𝐑𝐀𝐗𝐄𝐒 𝐓𝐇𝐄𝐄 𝐃𝐑𝐀𝐆𝐎𝐍 
│╰──────────────
╰────────═┅═───────
*Generated by*𝐓𝐘𝐑𝐀𝐗𝐄𝐒
`.trim()
conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/tUqZbZd.jpeg' }, caption: caption, footer: `Follow me on instagram:\n\tinstagram.com/arlodragon` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
