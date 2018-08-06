const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`x:`,"http://twitch.tv/A_K")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'move all')) {
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
         if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
      if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
       var author = message.member.voiceChannelID;
       var m = message.guild.members.filter(m=>m.voiceChannel)
       message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
       m.setVoiceChannel(author)
       })
       message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
     
      
       }
         });





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[**Wind**]  هذا هو رابط 
---------------------
-هذا الرابط صالح ل 5 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'say');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }


});






client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('475994170343817226');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`#Wind Voice: ${currentSize}`);
  if (currentSize !== size) channel.setName(`#Wind Voice:${currentSize}`);
});





client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالية**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed

if (command == "ban") {
let rank = message.guild.member(message.author).roles.find('name', 'ban');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }  
})
}
});


client.login(process.env.BOT_TOKEN);

