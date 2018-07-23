const Discord = require("discord.js");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files)=> {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if(jsfiles.length <= 0) {
      console.log('No commands to load!');
      return;
    }
    console.log(`Loading a Total of ${files.length} cmds.`)
    jsfiles.forEach(f => {
      let props = require(`./cmds/${f}`);
      console.log(`Loaded ${f} Successfully.`);
      bot.commands.set(props.help.name , props);
    });
  });



bot.on("ready", async () => {
  console.log(`Username: ${bot.user.tag}`)
});
 // Message handler.
bot.on("message", async message => {
  const msg = message.content.toLowerCase();

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = '+';
  if(!msg.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);
  });




bot.login("process.env.BOT_TOKEN");
