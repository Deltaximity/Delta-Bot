const { default: fetch } = require("node-fetch");
const { execute } = require("./help");

module.exports = {
    name: 'urban',
    description: "a command used for defining words",
    async execute(message, args) {
        const Discord = require('discord.js');
        const querystring = require('querystring');

        if (!args.length) {
            return message.channel.send('I\'m sorry, am I supposed to find a word here?');
        }

        const query = querystring.stringify({ term: args.join(' ')});
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`Oops! I didn't find any words matching **${args.join(' ')}**.`);
        }

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const [answer] = list;

        const embed = new Discord.MessageEmbed()
            .setColor('#EFFF00')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definition:', value: trim(answer.definition, 1024) },
                { name: 'Example:', value: trim(answer.example, 1024) }
            );

        message.channel.send(embed);
    }
}