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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923335079756";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_11_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpSOS9KdUgvWUZPNmNhQXQxS0VDOWV0RWkxZTVUYmRvNkhFeHBKb1ltN1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5nbVRYSXBNU0oyN0RfcXl6UlpZdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmQ0YWI3ZGMtZjZmMS00NjU0LWFiN2EtMTUwYTZiYTQwZDU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTcyLFxuICAgICAgMTcyLFxuICAgICAgOCxcbiAgICAgIDExMyxcbiAgICAgIDcsXG4gICAgICAxNTcsXG4gICAgICA1NCxcbiAgICAgIDIzOCxcbiAgICAgIDE4LFxuICAgICAgNDgsXG4gICAgICAyMjMsXG4gICAgICAxODgsXG4gICAgICA0NCxcbiAgICAgIDIxOSxcbiAgICAgIDI0OSxcbiAgICAgIDI1MSxcbiAgICAgIDk1LFxuICAgICAgMjU1LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDUyLFxuICAgICAgMjksXG4gICAgICA0MCxcbiAgICAgIDE3OSxcbiAgICAgIDMyLFxuICAgICAgMjAxLFxuICAgICAgMTczLFxuICAgICAgMjI1LFxuICAgICAgOTIsXG4gICAgICAxMTIsXG4gICAgICA5MSxcbiAgICAgIDY5LFxuICAgICAgMTUzLFxuICAgICAgMTIxLFxuICAgICAgMjAsXG4gICAgICAxNTUsXG4gICAgICAyMTYsXG4gICAgICAzMyxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdDOU5TNFc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzUwNzk3NTY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBZnNoYSBRdWVlblwiLFxuICAgIFwibGlkXCI6IFwiMjUxOTkwMjYxNTk3MDY6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVzdXVzSEVKYVV0N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRbDZZQU85Sk9GSWVRa3ZHTVpXQVRSODhPSjQzTW5FbGVQdExlbFhWUHpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNWeUlZcmpqZjQ3UHdJQnZNTngwSU1NT3pGT29Pa2FnSVN3K21rY2hyUDh4SURkcGJvTnJnZ09aZFgrTFBjd0k5R3lzdTMyOERpTzRKNU5aL3U2Y0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdTUnRJNURvN1ZLbDU1V3hQTG5TZGc5THlDQzF3c25uaFQwNEgvNm1KZlVnQW1JblZUL05WWC9HYkZjeFY5blpSd294S2tUWWxPRjIyZ2Z6WHhpYmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMzNTA3OTc1NjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjY1NDk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUENjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQ2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTRmRHZW5JZ3hpQUlQVmZsb3REZVVLOWZ3cHMybUJqL1grbmlESVZkWXNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDQzOTk0NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "afsha-Md",
  ownername:process.env.OWNER_NAME|| "afsha",


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
