const Discord = require('discord.js');

// The client connects to and uses the Discord API
const client = new Discord.Client();

client.on("guildCreate", (guild) => {
    const channel = guild.channels.cache.find(
      (c) => c.type === "text" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
    );

    const embed = new Discord.MessageEmbed()
        .setTitle('Greetings!')
        .setColor('#DAF7A6')
        .setThumbnail('')
        .addFields(
            {
                name: "`I am the Mass Unban Bot! Nice to meet you, beep boop. I hope I can serve to counteract any griefing attempts and save you lots of time!`",
                value: `\n\nAs of now, these are my commands:\n!help - Show available commands.\n!munban - Mass unban all members of your server.`
            }
        )

    if (channel) {
        setTimeout(function() {
            channel.send(embed);
        }, 1000);
    } else {
        console.log(`Can't send any arriving message`);
    }
});

client.once('ready', () => {
    console.log('Mass Unban Bot is active!');
});

client.on('message', message => {
    // Syntax of "`" indicates template literals
    // ${expression} is used for placeholders
    if (message.content === (`${process.env.PREFIX}munban`)) {
        /*
        if (message.member.hasPermission("BAN_MEMBERS")) {
            var count = 0;
            message.guild.fetchBans().then(bans => {
                bans.forEach(ban => {
                    count++;
                    setTimeout(function() {
                        message.guild.members.unban(ban.user.id);
                    }, 1000);
                });
                setTimeout(function() {
                    message.reply(`There are now ${bans.size - count} user(s) on the ban list. If more exist, please rerun the command.`).catch(e=>console.log(e));
                }, 1000);
            }).then(() => setTimeout(function() {message.reply(`${count} user(s) have been unbanned.`); }, 1000)).catch(e => console.log(e));
        } else {
            setTimeout(function() {
                message.reply("You do not have proper permissions for this command.");
            }, 1000);
        }*/
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
        message.reply('Test');
    } else if (message.content === (`${process.env.PREFIX}help`)) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setColor('#DAF7A6')
                .setThumbnail('')
                .addFields(
                    {
                        name: "`Need assistance? Here's my list of commands.`",
                        value: `\n\n!help - Show available commands.\n!munban - Mass unban all members of your server.`
                    }
                )

            setTimeout(function() {
                message.reply(embed);
            }, 1000);
        } else {
            setTimeout(function() {
                message.reply("You do not have proper permissions for this command.");
            }, 1000);
        }
    }
})

// Gives client access to bot using bot's token, must be last line
client.login(process.env.DJS_TOKEN);
