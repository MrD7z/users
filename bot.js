const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();



const text =
[
' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  **\n https://discord.gg/bzjuptE',
' ** تسمح لنا نخطفك شوي :hearts: :innocent: **\n https://discord.gg/bzjuptE',
'مكان راقي ندعوك له :fire::sparkles: \n لنجتمع لأضافة الابداع والجمال للديسكورد \n\n https://discord.gg/bzjuptE',
'حياكم الله في سيرفر **Coffe** \nسيرفر صديق وجميل بأهله وناسه \nآرواح امتزجت بالطيب والأخوهه \nتصافت قلوبهم على المحبه والمودهه \nيرحبون بالجميع :cherry_blossom: \n\n[ https://discord.gg/bzjuptE ] \nتنورنا 🤭:yellow_heart:.',
]

    client.on('guildMemberRemove', member => {
    member.createDM().then(function (author) {
        return author.send(`${text[Math.floor(Math.random() * text.length)]}`)
  
  }).catch(console.error)
  })
  
client.on('guildMemberRemove', member => {
    member.createDM().then(function (author) {
    return author.send('** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  **\n https://discord.gg/bzjuptE' )
  
  }).catch(console.error)
  })


 client.on('message', message => {
    if(message.content === 'heyz123') {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
      return ;
    }
        voiceChannel.join()
    }
})

  client.login(process.env.TOKEN);
