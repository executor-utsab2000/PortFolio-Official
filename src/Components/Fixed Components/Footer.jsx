import React from 'react'
import footerStyles from './Footer.module.css' 

const Footer = () => {
  return (
    <div className='container-fluid '>
        <div className="row">
            <div className={`col-12 py-4 text-center ${footerStyles.content}`}>
                <p>𝐓𝐡𝐞 𝐂𝐨𝐧𝐭𝐞𝐧𝐭𝐬 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 𝐚𝐫𝐞 𝐬𝐮𝐛𝐣𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭</p>
                <p>ᴛʜᴇ ᴡᴇʙsɪᴛᴇ ɪs ᴄʀᴇᴀᴛᴇᴅ ᴀɴᴅ ᴍᴀɪɴᴛᴀɪɴᴇᴅ ʙʏ ᴜᴛsᴀʙ</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
