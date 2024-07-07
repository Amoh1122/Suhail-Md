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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_35_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTkhFcHNwOG1aV20zM2UxQzM2aXk3RXZHWVcyMXZmZUhBaWNhNnBvOE1nST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUko5cXZOVk5TOWlkbGs4OENRN1lNQVwiLFxuICBcInBob25lSWRcIjogXCJmMDBiNmQ5Mi0wNjFhLTQ5NjEtOWIzZC1mZmQ1MDczOGU1YmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMyxcbiAgICAgIDI1MSxcbiAgICAgIDUzLFxuICAgICAgMjMyLFxuICAgICAgMTY2LFxuICAgICAgMixcbiAgICAgIDIyMyxcbiAgICAgIDIxLFxuICAgICAgMTgsXG4gICAgICA0MSxcbiAgICAgIDkzLFxuICAgICAgMzcsXG4gICAgICAyMjQsXG4gICAgICAyMzksXG4gICAgICAxNTcsXG4gICAgICAyMCxcbiAgICAgIDExNSxcbiAgICAgIDIzNSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTM1LFxuICAgICAgMzgsXG4gICAgICA5NixcbiAgICAgIDEzNSxcbiAgICAgIDgxLFxuICAgICAgMjIsXG4gICAgICAyMTEsXG4gICAgICAyMixcbiAgICAgIDIzNCxcbiAgICAgIDE2NixcbiAgICAgIDIwMyxcbiAgICAgIDUwLFxuICAgICAgMTI0LFxuICAgICAgOTksXG4gICAgICAxMDYsXG4gICAgICAyMjIsXG4gICAgICAyNTUsXG4gICAgICAzMSxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RDNBQTIzQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTMwMTU5MjAxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZaU8J2Wi/CdlovwnZaO8J2WiPCdlo7wnZaG8J2WkSB38J2Wjnpr8J2WjvCdlokgICDig53qmbDig53qmbDig53qmbDig53qmbDig53qmbDig53qmbDig53qmbDig53qmbBcIixcbiAgICBcImxpZFwiOiBcIjI0MTYyNjU3MjE4NTY3Njo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6UDRFUVEvdDZwdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNnZEamhrVDhBN3BmYjZWazhRN3JiV1dGVExlbjE5NEhFcyt1QkFuWFZGbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyNjd3ekdUcUtMYUtwcWZBVWZZcEVrRzVuQkoxSXlXb2MzTCtNdEl5MTNUZExta0FaQ0VNYzZycE5mZTZrb3Y5QmhENUhJclZwZlV2M1VwdjhtVE1Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyR1RjZnZuV3prMDZmZlhXcjR1RnFhK0lmVzVOQzdrRUQ0bjdiMnFVUFhXa1hWa1lWL1k1TU5CTE13WlcveE1WcDBTWkxKMkwxRTJxbWFsU3NWR1lodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzAxNTkyMDE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0ODU0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUV0V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXRXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmx0amtZQzZyTTMvbWRUbTd5RzVLdmZKV1FaNUhnS2pwWjJjK3Y0YXQvTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQxODkzNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzOTMxMzE5N1wifSIKfQ=="  // PUT your SESSION_ID 


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
