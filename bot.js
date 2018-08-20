const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();



client.on("guildMemberAdd", member => {
    member.createDM().then(function (author) {
    return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  ** https://discord.gg/WPfWcaT' )
  
  }).catch(console.error)
  })
  
  client.login(process.env.TOKEN);
