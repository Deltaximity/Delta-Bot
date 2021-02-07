module.exports = {
    name: 'help',
    description: "A command for displaying all commands, *one to rule them all*!",
    execute(message, args) {
        const Discord = require('discord.js');

        message.channel.send(`My prefix is \`^\` following up with a \`<command>\`, example: \`^hi\``);
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        // .setTitle("Commands")
        .addFields(
            { name: 'Commands:', value: `\`hi\` - \`help\` - \`dev\` - \`sad\` - \`say\` - \`joke\` - \`define\` - \`secret\``},
            { name: 'Words I listen to (no prefix):', value: `\`owo\` - \`welcome\` - \`no u\` - \`hmm\` - \`huh\` - \`pog\` - \`nani\` - \`wut\` - and some more...` }
        );

        message.channel.send(embed);
    }
}