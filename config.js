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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhLblF3Unp0UDFhdmZ1bXBlYTQxUWNNNTBHRThiLzBoNFBhNUZMOG1LRjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFiNmVGellEVHF5ckxQSUxieC1hNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNjMjEwMWUtN2NiMi00ZDZmLTg1ZDUtZGNlOGM5ZDIwZWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTAzLFxuICAgICAgMTY0LFxuICAgICAgMjA3LFxuICAgICAgMzAsXG4gICAgICAxNDUsXG4gICAgICAyMDYsXG4gICAgICAyMjMsXG4gICAgICA4NSxcbiAgICAgIDQsXG4gICAgICAyMDAsXG4gICAgICAxODksXG4gICAgICAxODcsXG4gICAgICAyMjAsXG4gICAgICAyNDUsXG4gICAgICAyMzMsXG4gICAgICAwLFxuICAgICAgMTM2LFxuICAgICAgMTAwLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMjQwLFxuICAgICAgMjQ0LFxuICAgICAgOTcsXG4gICAgICAxMDcsXG4gICAgICAxMzEsXG4gICAgICAwLFxuICAgICAgMjE3LFxuICAgICAgMzcsXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDExNSxcbiAgICAgIDE0OSxcbiAgICAgIDU5LFxuICAgICAgMTIxLFxuICAgICAgNjksXG4gICAgICAxMDYsXG4gICAgICAyMTksXG4gICAgICAxMzEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQ0w5TUJGVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzM1MDc5NzU2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWZzaGEgUXVlZW5cIixcbiAgICBcImxpZFwiOiBcIjI1MTk5MDI2MTU5NzA2OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xc3V1c0hFT3VOcXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWw2WUFPOUpPRkllUWt2R01aV0FUUjg4T0o0M01uRWxlUHRMZWxYVlB6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrekFIZFZIQnRBZkhtMzV3ZmRTRVVpSWZ5STZWTFZldGFwbUdtQWNmWXdRUndQdFI3blpXWitETXE2dGR3WnZBOUlLYmR3QllIeWpzVnYxT1dUYXRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXMFhQdGwwa0xyQ0MwdmVqc240Yk5TZTZiaEdFREVuZkVYME43SEdMZnZCcDBwOHgvcWN2SVRTdjVUMnBwRjI3d29nZ0dtYkRuZHF5V2U2MzgzY1RBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzUwNzk3NTY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ1MTY5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
