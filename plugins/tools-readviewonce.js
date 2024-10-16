const {downloadContentFromMessage} = (await import('baileys'));

const handler = async (m, {conn}) => {
  if (!m.quoted) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] RESPOND TO A MESSAGE THAT HAS BEEN SENT IN VIEWONCE (see only once)*';
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw '*[❗𝐈𝐍𝐅𝐎❗] Respond to an image or video that is sent with viewonce option*';
  const msg = m.quoted.message;
  const type = Object.keys(msg)[0];
  const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m);
  } else if (/image/.test(type)) {
    return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m);
  }
};
handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = /^(readviewonce|read|vv|readvo)$/i;
export default handler;
