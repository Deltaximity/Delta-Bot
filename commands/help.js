module.exports = {
    name: 'help',
    description: "A command for displaying all commands, *one to rule them all*!",
    execute(message, args) {
        const Discord = require('discord.js');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        // .setTitle("Commands")
        .setDescription("My prefix is \`^\` following up with a \`<command>\`, example: \`^hi\`")
        .addFields({ name: 'Commands:', value: `\`hi\` - \`help\` - \`dev\` - \`sad\` - \`say\` - \`joke\` - \`urban\` - \`clear\` - \`secret\``})
        .addFields({ name: 'Words I listen to (no prefix):', value: `\`owo\` - \`welcome\` - \`no u\` - \`hmm\` - \`huh\` - \`pog\` - \`nani\` - \`what\` - and some more...` });

        message.channel.send(embed);
    }
}