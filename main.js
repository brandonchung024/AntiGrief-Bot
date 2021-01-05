const Discord = require('discord.js');

// config file allows all sensitive data to be in one separate file
// this extracts variables from json
// const { prefix, token } = require('./config.json');

// The client connects to and uses the Discord API
const client = new Discord.Client();
/*
client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    channel.send(`Thanks for inviting me into this server!`);
});
*/
client.once('ready', () => {
    console.log('AntiGrief Bot is active!');
});

client.on('message', message => {
    // Syntax of "`" indicates template literals
    // ${expression} is used for placeholders
    if (message.content === (`${process.env.PREFIX}munban`)) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            var count = 0;
            message.guild.fetchBans().then(bans => {
                bans.forEach(ban => {
                    count++;
                    message.guild.members.unban(ban.user.id);
                });
            }).then(() => message.reply(`${count} user(s) have been unbanned.`)).catch(e => console.log(e));
   
            message.guild.fetchBans().then(banned => {
                if (banned.size > 0) {
                    message.reply(`There are still ${banned.size} user(s) on the ban list. Please rerun the command to unban the remaining users.`).catch(e => console.log(e));
                } else {
                    message.reply(`There are no more users to be unbanned!`).catch(e => console.log(e));
                }
            }).catch(e => console.log(e));
        } else {
            message.reply("You do not have proper permissions for this command.");
        }
    }
})

// Gives client access to bot using bot's token, must be last line
client.login(process.env.DJS_TOKEN);
