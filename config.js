knollconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923170692307";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_09_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQk1vTHZWZU1ZSGFGTWhlRmd4OWhmSm1kcVMvSWdXYlAxVDNsN3JxZVpXMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNzA2OTIzMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGODU1QzQyNzYxNDdCRDc4RUYxMjVENkNEQkMyMTMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjgzMzM3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDS0liR3F3cVNGUzNxZTNuMkp4R3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlY2M2MjBlLTcwYTMtNDZiNC1hMjUyLWZkNmQxZjAwODY3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDIwMSxcbiAgICAgIDExNSxcbiAgICAgIDE4NSxcbiAgICAgIDc0LFxuICAgICAgMzUsXG4gICAgICAxNzUsXG4gICAgICAxNixcbiAgICAgIDIwMCxcbiAgICAgIDIxMyxcbiAgICAgIDE4OSxcbiAgICAgIDE4MyxcbiAgICAgIDU0LFxuICAgICAgMzIsXG4gICAgICAyMDcsXG4gICAgICA5MCxcbiAgICAgIDUyLFxuICAgICAgMjU1LFxuICAgICAgMTUwLFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgNTAsXG4gICAgICAyNTQsXG4gICAgICAxMzUsXG4gICAgICAxNjUsXG4gICAgICA0MyxcbiAgICAgIDIxOSxcbiAgICAgIDI0OSxcbiAgICAgIDY1LFxuICAgICAgNDgsXG4gICAgICAzNixcbiAgICAgIDAsXG4gICAgICAxMzksXG4gICAgICA0OCxcbiAgICAgIDU1LFxuICAgICAgNTEsXG4gICAgICAyNDcsXG4gICAgICAyMTQsXG4gICAgICAyMzksXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEZYS1ozWVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3MDY5MjMwNzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5NDA2MDIzNzI5MjI1OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIUitvZ0NFTmVZMDdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWNXZ1U3cjBrNmRoZVRwc3ZBS2EzcU5sYlVobWZxK3lMM3RUV29oR3RpRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYWjZMd0RBeWdVK3BrK24wODByVU03VGZWUUY5b0VOdjdudVQ1bVJFa1hYME9pQVI4NGR2UGlxcU5GalFxU0hqZ2VqKy81Vkw4K0MxdEcwdFZ4ZTFEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVZmNiMkdsTmFpZnc3dnlzK2UvNExsbFUxZHpKc2xibktHY2UzOXkzUzVCUW4xZXZwMEx4TER3cmFybkxvcmdvN0ZvUHA1YSs1M2d2K2RZejZvS0REQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzA2OTIzMDc6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODMzMzcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHpPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMek8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvSVNlRmd1SHg4d0p0MVpGVFdCTUppeElEUDBGcTI4ZTZKeTFyREIySTM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1NTY1NzM0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
