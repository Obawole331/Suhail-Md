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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_31_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidFVEVXhOMHZ0RW1mZnk5dlFXNW1vdXFQWGlMK09KYzd1QjhTQUlkaEZtYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3pnM29ybHVTS1NVRmVHbWgwN09Ed1wiLFxuICBcInBob25lSWRcIjogXCI4ZDIzYzczMC0wNmE2LTQ4MmQtYWRhYS01NTQ5MDMxM2U0OGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMzEsXG4gICAgICAyMTksXG4gICAgICAxMDMsXG4gICAgICA4OSxcbiAgICAgIDEyMixcbiAgICAgIDIxMSxcbiAgICAgIDEyOSxcbiAgICAgIDEyNCxcbiAgICAgIDk2LFxuICAgICAgMTk2LFxuICAgICAgMTA2LFxuICAgICAgMTE0LFxuICAgICAgMTY5LFxuICAgICAgMSxcbiAgICAgIDMxLFxuICAgICAgMjA2LFxuICAgICAgMTI0LFxuICAgICAgMTY2LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgOTQsXG4gICAgICAxODgsXG4gICAgICAyMjAsXG4gICAgICA1MSxcbiAgICAgIDI5LFxuICAgICAgMTksXG4gICAgICA0NyxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgMTA0LFxuICAgICAgMTg0LFxuICAgICAgMTM3LFxuICAgICAgNixcbiAgICAgIDEwMyxcbiAgICAgIDEwMyxcbiAgICAgIDIyOCxcbiAgICAgIDIxOSxcbiAgICAgIDQ2LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks0SjVMWllRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTAwMjA0OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODI2Mzk0NDA5NjU4NzY6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2FacFMwUTkveXd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1YjMrYjFQMktXd1NIS3VyejJ0OEhuZ2ZxT29UUWIxWTZid3k0V3JJd1I0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9FU1JJT0hjbGVCQ01JQWRiRWQ1MUwrY0ZkQ1BTOGdDa3hlWHF3NjY0ZHJOZFdPWS9IcHk1elFaWnVOcy9YRVd2MCtYVkREbkJZa3Q0NWJzUkRyakN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjE1TnFUdGhWbHJTMmdGVUhBbnl0MEE1WUVyU3U1UlVBbFZnQzdOSWh1VWVDT3JnTko0cmlOQXM1S251ZlJXTUZHbjY2TXArZTE2SituVXVEMXM3U2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxMDAyMDQ6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY3MDY4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
