import db from '../lib/database.js'

const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*≡ 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎*
            
𝐂𝐇𝐎𝐋𝐎 𝐁𝐀𝐁𝐎𝐒𝐎 𝐍𝐎 𝐄𝐍𝐕𝐈𝐄𝐒 𝐓𝐔𝐒 𝐇𝐔𝐄𝐕𝐀𝐃𝐀𝐒 𝐃𝐄 𝐋𝐈𝐍𝐊 
𝐂𝐇𝐀𝐔 𝐂𝐓𝐌 *${await this.getName(m.sender)}*  𝐘 𝐍𝐎 𝐕𝐔𝐄𝐋𝐕𝐀𝐒 ${isBotAdmin ? '' : '\n\nNo soy admin así que no te puedo expulsar :"v'}`, igfg, ['Desactivar AntiLink', '/off antilink'], m)
        if (isBotAdmin && chat.antiLink) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
