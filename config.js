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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349162420469";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxWnc4M1ZuMCtFWEpRYkZYcmd2STE1UGtDTXU5RXp6UVNhUWlCOFF5aE5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjI0MjA0NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4OTA1NzAzQzg1MDgzNkU5QTI2RDlBM0ZDM0I2Mzk1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkxMzYwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5b1RoTGlvbFNfaWlDWHl3LUxPR1JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxOGNhN2ZhLTQ3MmEtNGYwNC05ZTY3LTg2NGJmZWZkNzE4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAzMSxcbiAgICAgIDI2LFxuICAgICAgMjQ1LFxuICAgICAgNyxcbiAgICAgIDE0MyxcbiAgICAgIDE0MCxcbiAgICAgIDExNCxcbiAgICAgIDc2LFxuICAgICAgNTcsXG4gICAgICAxNDgsXG4gICAgICAzMSxcbiAgICAgIDE2OSxcbiAgICAgIDEzMixcbiAgICAgIDIxMyxcbiAgICAgIDExNyxcbiAgICAgIDExNyxcbiAgICAgIDE2LFxuICAgICAgMTU1LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDE0NixcbiAgICAgIDE0MyxcbiAgICAgIDE4OSxcbiAgICAgIDYyLFxuICAgICAgMTY1LFxuICAgICAgMTAsXG4gICAgICA4MCxcbiAgICAgIDExOSxcbiAgICAgIDE1NixcbiAgICAgIDMxLFxuICAgICAgMjE2LFxuICAgICAgMjI1LFxuICAgICAgNTksXG4gICAgICAxMzgsXG4gICAgICAzNSxcbiAgICAgIDIxOSxcbiAgICAgIDcwLFxuICAgICAgMTI3LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpBRzJCN01DXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyNDIwNDY5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXZWFsdGggT2ZmZXJzIE9ubGluZVwiLFxuICAgIFwibGlkXCI6IFwiMTgzMzIyNTI1MzUyMDA2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRRaXNvQ0VMcUwyTElHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3VXJ3SC9GN2d2ZS81RWx1WGVGN1hnRCtxVUF6RC9lUVZ6QjE0eE1YMERFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZRU2VFVmthZUVQQTNObFdqUllLSEpibmtLOTh4MlExSkVQc08wMGVONzh1bWNGMERoWFM1WmYzNmVmM2VDR3AwclZvZzRhVVZUMG1UOE5udDlBTkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVBbHE5SWFaMXAxOFNYbTNmN1hwd2xpclJsOGczWm5TeXFLeXR3eGVFNFFkNHRFSW1Za0lOZmJFdnFZZ3B4TEQzQVBSVjNVS2FPenV1RC9MOEMzUmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjI0MjA0Njk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkxMzU5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUROd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRE53Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib01nQkw0aXVraWdhZ3kzekZzbk1UcTlGaENFZEt4OCtwYzF6YjdjZm4rTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTIyMzQyNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDU3MzM0MTg2MVwifSIKfQ=="  // PUT your SESSION_ID 


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
