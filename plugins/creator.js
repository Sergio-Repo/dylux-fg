function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *not.sxrgio*
▢ Instagram :
  • https://instagram.com/not.sxrgio
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • https://github.com/NoHayXD
▢ Telegram : 
  •  
  • 
  • 
▢ Facebook : 
  • 
  • 
▢ YouTube : 
  • 
  
 *≡ HELPERS*
  *Gabriel Nada*
▢ Instagram : https://www.instagram.com/
▢ WhatsApp : wa.me/
  *Puneño Mugroso*
▢ Instagram : https://
▢ WhatsApp : wa.me/51977802958
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
