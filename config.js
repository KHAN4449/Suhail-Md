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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_17_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZxRzRaNS92QWIzRUhrYlJPNldiRER0NEc0Y3RpeGV3YWJNRkR3VFlPWUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzM1MDc5NzU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OUQxREI0OUZEODE3MzQxMEVFNjdGQzdEMjNBMDU5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MDgyMzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ0poUFRKc1FRd0s1bTFkeU9zQV8yZ1wiLFxuICBcInBob25lSWRcIjogXCJmOWMzYzU1OS1iNjBkLTRhNjYtODAzMi0wYTY1NDdkZjFhNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAyNTIsXG4gICAgICAxNTMsXG4gICAgICA1NixcbiAgICAgIDczLFxuICAgICAgNTgsXG4gICAgICAyMzYsXG4gICAgICAxNSxcbiAgICAgIDc1LFxuICAgICAgMTYxLFxuICAgICAgMTkxLFxuICAgICAgNzcsXG4gICAgICAyMjksXG4gICAgICAxOSxcbiAgICAgIDIwNSxcbiAgICAgIDE1NSxcbiAgICAgIDUyLFxuICAgICAgMTU2LFxuICAgICAgMjUwLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDEwMSxcbiAgICAgIDE1MixcbiAgICAgIDIxOCxcbiAgICAgIDU2LFxuICAgICAgNDYsXG4gICAgICAxMjQsXG4gICAgICAxMDEsXG4gICAgICAyMjcsXG4gICAgICAxMjEsXG4gICAgICAxNDEsXG4gICAgICA1NSxcbiAgICAgIDExMixcbiAgICAgIDEsXG4gICAgICA0OCxcbiAgICAgIDIwLFxuICAgICAgODksXG4gICAgICAxOTgsXG4gICAgICAyMjcsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjFSVExSQTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzNTA3OTc1NjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhBQ0tFUi4uISFcIixcbiAgICBcImxpZFwiOiBcIjI1MTk5MDI2MTU5NzA2OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tc3V1c0hFS0xteGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWw2WUFPOUpPRkllUWt2R01aV0FUUjg4T0o0M01uRWxlUHRMZWxYVlB6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4NytHMU5nWGduWmZJKzRtZVJLckdqUS9veVUrZ0ZJNVFRRGRzUkg1ZEhjelczb2pzakVrdURZRDJRelJ3Q0hOSVd3M00xVXp5YUtjeFhCOWhUb2RBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyR05yTVJhSVROMmdFaHZJSEZhM0w3bUFMQUZtWWUxRlM0a0M5QlF6Nm83ZmZuVmc2VUVpVXlUTjNaWks4ZGxzUWd3N04zUXpHZktkRTR6SVE2LzBDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzUwNzk3NTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwODIzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJsSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmxILmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXFSYWwvZ01CbjlpN2tQNG41OXhzVGRpM2hQS0Mxd1JuZVVJbWtRYm9xMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA0Mzk5NDQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MDgyMzIwODZcIn0iCn0="  // PUT your SESSION_ID 


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
