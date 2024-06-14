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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923170692307";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVYwbnRxUFYrRmdnNlFLdE9vaHl0OG81SXhEejZHWU15WXVCaklUdHBHVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1FudFI0QUhRM2lHU1FEYmF4Y3lWUVwiLFxuICBcInBob25lSWRcIjogXCJmMTNkZjc3YS04YWI0LTQ1N2QtYjAxYi1jYWM4MzMxMDQ5ZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjE1LFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICAyMjgsXG4gICAgICAxNTMsXG4gICAgICAxMzUsXG4gICAgICAyNTQsXG4gICAgICAxMzAsXG4gICAgICAxNTAsXG4gICAgICA5NCxcbiAgICAgIDI1MSxcbiAgICAgIDE4MyxcbiAgICAgIDQxLFxuICAgICAgNixcbiAgICAgIDE4MCxcbiAgICAgIDE4NixcbiAgICAgIDEzOCxcbiAgICAgIDU4LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTE4LFxuICAgICAgMTU5LFxuICAgICAgMTk2LFxuICAgICAgNjQsXG4gICAgICA1MixcbiAgICAgIDExOCxcbiAgICAgIDE2LFxuICAgICAgOTIsXG4gICAgICAxMzEsXG4gICAgICAxMzQsXG4gICAgICAxMTEsXG4gICAgICA4MixcbiAgICAgIDU1LFxuICAgICAgNTYsXG4gICAgICA2LFxuICAgICAgNjUsXG4gICAgICAyMjgsXG4gICAgICAxNjIsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFBOQTRGVDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3MDY5MjMwNzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5NDA2MDIzNzI5MjI1OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUUitvZ0NFSW1Pc2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWNXZ1U3cjBrNmRoZVRwc3ZBS2EzcU5sYlVobWZxK3lMM3RUV29oR3RpRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxYzZuOTlTakx6R2ZDdTVXSUZTRXhJKzVsVSsyaGNsdTg2QklIQjJ3QVU5S2tnMy8xRVJkRmx2NUpiMksydVd3UmU0S1Yza08zaWcxVUJyRHdiTzdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqQTJQb0ZFU3Bmdm15eHo2NmVudW1VLzN5QlZ1Si80UnM1UEpLbmY4LzNWYkw0OS8vaktWRGRTdWR4cGgwRW1RQUdZUnYxc09wV0VSSUJISzNjbzdpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzA2OTIzMDc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzcyMTA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnZ5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdnkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSdjVtMWZWc0ZQditNbTU1SGhJVnlPazNBdW1VMDJwd1ZDVjY4azM1Q1lRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1NTY1NzM0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzcyMTE0NzE5XCJ9Igp9"  // PUT your SESSION_ID 


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
