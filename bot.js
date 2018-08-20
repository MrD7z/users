const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();



client.on("guildMemberAdd", member => {
    member.createDM().then(function (author) {
return author.send(' ** تسمح لنا نخطفك شوي :hearts: :innocent: ** \n https://discord.gg/bzjuptE' )
        
  }).catch(console.error)
  })
  
  client.login(process.env.TOKEN);
