const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_30_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkd4SDFzellZamdkMnJXZm9hNThaQi96a05QQi9YLzl0QzFEemJOcnFJbXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpNa00weUplU21XVUt3SENheFdtOVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY0YTM1ZmItYzEzMi00NTJkLWExN2EtOWFjMTFiNzhjYmVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDExLFxuICAgICAgMTUzLFxuICAgICAgNzUsXG4gICAgICAxNjQsXG4gICAgICAxMzMsXG4gICAgICAxMzgsXG4gICAgICAxNzAsXG4gICAgICA0MyxcbiAgICAgIDQyLFxuICAgICAgOTAsXG4gICAgICA0NSxcbiAgICAgIDU0LFxuICAgICAgODYsXG4gICAgICAzLFxuICAgICAgMTEwLFxuICAgICAgMTUxLFxuICAgICAgNzksXG4gICAgICA5NixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDI1NCxcbiAgICAgIDEzOSxcbiAgICAgIDEwNSxcbiAgICAgIDExMyxcbiAgICAgIDIxMyxcbiAgICAgIDYzLFxuICAgICAgMjIwLFxuICAgICAgMjMwLFxuICAgICAgMTYwLFxuICAgICAgMTc1LFxuICAgICAgMjM5LFxuICAgICAgMjI2LFxuICAgICAgMTg5LFxuICAgICAgMTA2LFxuICAgICAgNzAsXG4gICAgICA4OSxcbiAgICAgIDIxLFxuICAgICAgMTYyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU00zQkRGQ0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NDc4NjQzNzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3OTI2MDIwMzcwNjE4OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2aTgva0hFTVRjcWJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibm9SWS9SZWhxMUVHNnBHL2RyUHljMGd3c0J3dFNDSDhlWHBMTlBZMVZBUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRlpwWUdQcS9ZTWlVbEVFNmx5S3BHd1ZiSVNva2Y4L0JHYmx6b1MwTTRkclBkMUxCbG4zci9iK0VBYWVDbjZXOGVBaWJUNXY5VUN5Unp2RXdBYmVBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvbVFGRUp1RmpIQ0t6NElqNXBXdjdnMjQwUWVsSmdrUVhDSDFueFBBdE5pTFcvTlFiejIxTW1aSy9MMGV2NHd0TEhrMDVZU3hpVlkzZkROckRwYXNqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDQ3ODY0Mzc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQ4MjMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUhaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvbkM5U29pUmJmN2pnd3dGUEF0ZWd4SjFxaTVKdHkyV1ZyOGJudG9DY2xVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzQ3MDAzMTQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzE5NjQ5MDM3MzI5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
