module.exports = {
    name: 'dev',
    description: "a bot dev referrer command",
    execute(message, args) {
        const Discord = require('discord.js');
        // message.channel.send("I'm being programmed by <@483941946495336487> at: https://github.com/DELTA-codes ! c:");
        const devEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('DELTA-codes - Github')
            .setURL('https://github.com/DELTA-codes')
            .setDescription('I\'m being programmed by <@!483941946495336487>! click the link above to see my code on Github!')

        message.channel.send(devEmbed);
    }
}