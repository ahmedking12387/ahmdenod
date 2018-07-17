const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

























console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/dqVFqrN ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});













































client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links للاسف ما تقدر تنشر :) ههههههههههايي 😠 ! **`)
    }
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ق2') {
    msg.reply('لم يتم اضافة القوانين رقم 2 او ق2 لعدم وجود قوانين كثير اذا كنت تبي تدعمنا او توصل لصاحب البوت واعطائنا افكارك تواصل اكتب الامر -support');
  }
});





client.on('message', msg => {
  if (msg.content === 'مين يلعب؟') {
    msg.reply('انا العب ولا شي :)');
  }
});









client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')
      .setFooter('اوامر الادمنيه')
	  .addField('-bc', `لخاصية البرودكستات`)
      .setFooter('======================================================')
      .setFooter('اوامر الاعضاء')
      .addField('-invite', `لاضافة البوت الى سيرفرك`)
	  .addField('-roles', `لمعرفة الرتب الي في السيرفر`)
      .addField('-avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
      .addField('-2avatar', `الافتار عن طريق المنشن`)
	  .addField('-server', `يجبلك معلومات السيرفر`)
	  .addField('-id', `يجبلك الملف الشخصي حقك`)
	  .addField('-clear', `البوت يمسح  100 رسايل`)
	  .addField('-say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('-ping', `يقلك كم بنق البوت`)
      .addField('-support', `سيرفر الدعم`)
      .setFooter('======================================================')
      .setFooter('اوامر تحت الصيانه(يمكنك تجربتها) وشكرا')
      .addField('-play', `لتسمع الاغنيه`)
      .addField('-غرد', `للتغريد`)
      .addField('-embed', `البوت يكرر الكلام الي قلته ب امبد`)
	  .addField('-cat', `يجبلك صورة بسه`)
  message.author.send({embed});

 }
});










client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')
      .addField('شكرا لك لاستخدامك ل بروميوم بوت', `https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=350470102803546115`)
  message.author.send({embed});

 }
});


































client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')  
      .addField('سيرفر الدعم الفني', `  https://discord.gg/dFCBGX6  `)
  message.author.send({embed});

 }
});






















const TOKEN = "";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('-' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }
  
  
  








client.on('message', message => {
     if (message.content === "-كم") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` Premium Bot
 .`, 'https://b.top4top.net/p_6021qh431.jpg')

  message.channel.sendEmbed(embed);
    }
});












client.on('message', message => {
    if (message.content === "-roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});












   var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});






































const Client = new Discord.Client();







         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.sendFile("./tyt.png");
            }
         });




         client.on('message', message => {
            if (message.content === 'ق1') {
              message.channel.sendFile("./5.png");
            }
         });





         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.sendFile("./5bz.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'حشيش') {
              message.channel.sendFile("./2.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.sendFile("./WLC.png");
            }
         });
         
         
         
         
         
         
         
         
         
                 client.on('message', message => {
            if (message.content === 'ترحيب') {
              message.channel.sendFile("./1.jpg");
            }
         });



















client.on('ready', () => {
   console.log(`----------------`);
      console.log(`PANDA BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`in 54 server -help`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});








 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});





















client.on("message", message => {
     if (message.content === "-kick") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});




client.on("message", message => {
     if (message.content === "-ban") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});











client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



















Client.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
Client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});












































client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "غرد") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© . :AG || Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});









































































client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "clear")) {
				if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© Premium Bot ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});







































const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت ‏- الحرية لـ ... ؟',
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت| بعد ١٠ سنين ايش بتكون ؟',

     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت تويت|شخص لاترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `-كت تويت`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** لا تنسى تسكر الباب وراك :( *** ..',
}}).catch(console.error);
  }
);
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** نورتنا والله *** !',
}}).catch(console.error);
  }
);




















var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});















client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});





var prefix = "-";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});














  var prefix = "-";
    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});




















































client.login("");
