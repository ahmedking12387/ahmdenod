const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[xd] ${client.users.size}`)
    client.user.setStatus("idle")
});
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
const prefix = "5"
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('ظٹط¬ط¨ طھظˆط¢ط¬ط¯ ط­ط¶ط±طھظƒ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
			return msg.channel.send('ظ„ط§ ظٹطھظˆط¢ط¬ط¯ ظ„ط¯ظٹ طµظ„ط§ط­ظٹط© ظ„ظ„طھظƒظ„ظ… ط¨ظ‡ط°ط¢ ط§ظ„ط±ظˆظ…');
		}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('ظ„ط§ ظٹطھظˆط¢ط¬ط¯ ظ„ط¯ظٹ طµظ„ط§ط­ظٹط© ظ„ظ„طھظƒظ„ظ… ط¨ظ‡ط°ط¢ ط§ظ„ط±ظˆظ…');
		}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**ظٹط¬ط¨ طھظˆط¢ظپط± ط¨ط±ظ…ط´ظ† `EMBED LINKS`ظ„ط¯ظٹ **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** طھظ… ط§ظ„ط¥ط¶ط¢ظپط© ط¥ظ„ظ‰ ظ‚ط£ط¦ظ…ط© ط§ظ„طھط´ط؛ظٹظ„`);
		} else {
			try {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**ط§ظ„ط±ط¬ط¢ط، ظ…ظ† ط­ط¶ط±طھظƒ ط¥ط®طھظٹط¢ط± ط±ظ‚ظ… ط§ظ„ظ…ظ‚ط·ط¹** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
					.setFooter("! Roses.")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('ظ„ظ… ظٹطھظ… ط¥ط®طھظٹط¢ط± ظ…ظ‚ط·ط¹ طµظˆطھظٹ');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: ظ„ط§ ظٹطھظˆظپط± ظ†طھط¢ط¦ط¬ ط¨ط­ط« ');
				}
			}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹطھظˆظپط± ظ…ظ‚ط·ط¹ ظ„طھط¬ط¢ظˆط²ظ‡');
		serverQueue.connection.dispatcher.end('طھظ… طھط¬ط¢ظˆط² ظ‡ط°ط¢ ط§ظ„ظ…ظ‚ط·ط¹');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹطھظˆظپط± ظ…ظ‚ط·ط¹ ظ„ط¥ظٹظ‚ط¢ظپظ‡');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('طھظ… ط¥ظٹظ‚ط¢ظپ ظ‡ط°ط¢ ط§ظ„ظ…ظ‚ط·ط¹');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط´ط؛ط¢ظ„.');
		if (!args[1]) return msg.channel.send(`:loud_sound: ظ…ط³طھظˆظ‰ ط§ظ„طµظˆطھ **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: طھظ… طھط؛ظٹط± ط§ظ„طµظˆطھ ط§ظ„ظٹ **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپ ط§ظ„ط¹ظ…ظ„.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: ط§ظ„ط§ظ† ظٹطھظ… طھط´ط؛ظٹظ„ : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپ ط§ظ„ط¹ظ…ظ„.');
		let index = 0;
		//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**ط§ظ„ط§ظ† ظٹطھظ… طھط´ط؛ظٹظ„** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('طھظ… ط¥ظٹظ‚ط§ظپ ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ظ…ط¤ظ‚طھط§!');
		}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپ ط§ظ„ط¹ظ…ظ„.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('ط§ط³طھط£ظ†ظپطھ ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ط¨ط§ظ„ظ†ط³ط¨ط© ظ„ظƒ !');
		}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپظٹ ط§ظ„ط¹ظ…ظ„.');
	}

	return undefined;
});
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`ظ„ط§ ط£ط³طھط·ظٹط¹ ط¯ط®ظˆظ„ ظ‡ط°ط¢ ط§ظ„ط±ظˆظ… ${error}`);
		}
	} else {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** طھظ… ط§ط¶ط§ظپظ‡ ط§ظ„ط§ط؛ظ†ظٹط© ط§ظ„ظٹ ط§ظ„ظ‚ط§ط¦ظ…ط©!`);
	}
	return undefined;
}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

	serverQueue.textChannel.send(`ط¨ط¯ط، طھط´ط؛ظٹظ„ : **${song.title}**`);
}//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'

const adminprefix = "5";//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
const devs = ['431150885549113344'];//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
    
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} طھظ… طھط؛ظٹظٹط± ط¨ظ„ط§ظٹظ†ظ‚ ط§ظ„ط¨ظˆطھ ط¥ظ„ظ‰ **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹظٹط± ط£ط³ظ… ط§ظ„ط¨ظˆطھ ط¥ظ„ظ‰`)
return message.reply("**ظ„ط§ ظٹظ…ظƒظ†ظƒ طھط؛ظٹظٹط± ط§ظ„ط§ط³ظ… ظٹط¬ط¨ ط¹ظ„ظٹظƒ ط§ظ„ط§ظ†طھط¸ط¢ط± ظ„ظ…ط¯ط© ط³ط§ط¹طھظٹظ† . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹط± طµظˆط±ط© ط§ظ„ط¨ظˆطھ`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**طھظ… طھط؛ظٹظٹط± طھظˆظٹطھط´ ط§ظ„ط¨ظˆطھ ط¥ظ„ظ‰  ${argresult}**`)
}

});

client.on("message", message => {
 if (message.content === `5help`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL ط، , ًں”•#4777 'CODES SERVER'
      .setDescription(`
${prefix}play â‡ڈ ظ„طھط´ط؛ظٹظ„ ط£ط؛ظ†ظٹط© ط¨ط±ط¢ط¨ط· ط£ظˆ ط¨ط£ط³ظ…
${prefix}skip â‡ڈ ظ„طھط¬ط¢ظˆط² ط§ظ„ط£ط؛ظ†ظٹط© ط§ظ„ط­ط¢ظ„ظٹط©
${prefix}pause â‡ڈ ط¥ظٹظ‚ط¢ظپ ط§ظ„ط£ط؛ظ†ظٹط© ظ…ط¤ظ‚طھط§
${prefix}resume â‡ڈ ظ„ظ…ظˆط¢طµظ„ط© ط§ظ„ط¥ط؛ظ†ظٹط© ط¨ط¹ط¯ ط¥ظٹظ‚ط¢ظپظ‡ط¢ ظ…ط¤ظ‚طھط§
${prefix}vol â‡ڈ ظ„طھط؛ظٹظٹط± ط¯ط±ط¬ط© ط§ظ„طµظˆطھ 100 - 0
${prefix}stop â‡ڈ ظ„ط¥ط®ط±ط¢ط¬ ط§ظ„ط¨ظˆطھ ظ…ظ† ط§ظ„ط±ظˆظ…
${prefix}np â‡ڈ ظ„ظ…ط¹ط±ظپط© ط§ظ„ط£ط؛ظ†ظٹط© ط§ظ„ظ…ط´ط؛ظ„ط© ط­ط¢ظ„ظٹط§
${prefix}queue â‡ڈ ظ„ظ…ط¹ط±ظپط© ظ‚ط¢ط¦ظ…ط© ط§ظ„طھط´ط؛ظٹظ„
 `)
   message.channel.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
	 if (message.content === `join`) {
		if (!message.member.voiceChannel) return message.reply('**Sorry,youre not on a voice channel**');
		message.member.voiceChannel.join().then(message.react('âœ…'));
	}
});
   
client.login(process.env.BOT_TOKEN);
