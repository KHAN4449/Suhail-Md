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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_48_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3U3l2eFdPYURjOE5mVGNOV1VNRzk4UHFuejNON0Q0Ull0dnhVaWtGUzQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFNkEwMUZZRVRHQzZQVkQ0TFlvQkRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1ZjY1YjgxLWIxMTEtNDVkMi1iMmQyLWJkYThkMGJhM2I4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNzgsXG4gICAgICAxMSxcbiAgICAgIDc1LFxuICAgICAgMjQ2LFxuICAgICAgMTE5LFxuICAgICAgMTM4LFxuICAgICAgMTE1LFxuICAgICAgMzksXG4gICAgICAxOTEsXG4gICAgICA1OSxcbiAgICAgIDE0MSxcbiAgICAgIDkzLFxuICAgICAgNDgsXG4gICAgICAxNzQsXG4gICAgICA0OCxcbiAgICAgIDIzNyxcbiAgICAgIDE2NCxcbiAgICAgIDI3LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE0MyxcbiAgICAgIDIxOCxcbiAgICAgIDIwLFxuICAgICAgMjE4LFxuICAgICAgNTAsXG4gICAgICA1OCxcbiAgICAgIDE5NixcbiAgICAgIDEyLFxuICAgICAgMTI1LFxuICAgICAgMTMsXG4gICAgICAyMjQsXG4gICAgICAxMTcsXG4gICAgICAxOTAsXG4gICAgICAyMCxcbiAgICAgIDE0MCxcbiAgICAgIDI0LFxuICAgICAgOTUsXG4gICAgICA4NSxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOTUdRNDhSQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjAzNjAyOTcxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLdmR2ZLNouK4mSDwnZCM8J2QkiDwk4apLS3wnZCC8J2Qh/CdkIDwnZCN8J2Qg/CdkIgtLdic8JOGqiDjgIbNjiBcXG5cXG5cXG7iirlcXG5cXG5cXG7iirlcXG5cXG5cXG7iirkgXFxuXFxuXFxu4oq5XFxuXFxuXFxu4oq5XFxuXFxuXFxu4oq5XFxuXFxuXFxu4oq5XFxuXFxuXFxu4oq5XFxuXFxuXFxu8JOGqeC9kOC9suC8j+C9i+C+gPCThqpcIixcbiAgICBcImxpZFwiOiBcIjE4MDk5ODg4MDkwMzE4MDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNU0ltcllGRU9ua3FiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF6ZWVmWnMvUFBuSXYvSU1lR3hSN2h4WnZPRjJJZzFQSHlyc3RlNkthekk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1lrY1RNZHBNQjZic3N2MXBNOHNTMVA0b20reTFCV3dZMm4rSzFyM3VtU2hvVFVWdkJTYzdSbHZsUkR0TW9SUlFicWF4d2RrOXZsM1EzNGg4eHRWQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRTV6NGNneExsdW1Fc2dCMjVLcUJkcFhFTU9IOGVIbVRSby82R1U1WnltQjYwTGNLc3NudE5DaWRJTmppaldLbUdHVHRoeGpFaE1MMzV5akZ0dnVWanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjAzNjAyOTcxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0OTI5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd6VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3pVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1JLaHhlN3BVQWFkRmIzNkx0U3l3bjBFVGNzWC9VL2tGeVRRVHNmMlZhST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU1ODUwNTYyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
