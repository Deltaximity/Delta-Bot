require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!d ';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.once('ready', () => {
    console.log('Delta bot is online!');
});

client.on('message', message => {
    // const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    // if (!prefixRegex.test(message.content)) return;

    // bot barrier
    if (message.author.bot) return;

    let checkedMessage = message.content.toLowerCase();
    
    if (checkedMessage.includes("delta") || checkedMessage.includes("<@!483941946495336487>")) {
        message.channel.send("Hold on... give Delta a moment, he's probably drowning in the toilet.");
    } else if (checkedMessage.includes("welcome")) {
        message.channel.send("Welcome!! ^^");
    } else if (checkedMessage.includes("shame")) {
        message.channel.send("Shame? I left that in my dad's testicles.");
    } else if (checkedMessage === "owo") {
        message.channel.send("What's this?");
    } else if (checkedMessage === "no u" || checkedMessage === "no you") {
        message.channel.send("no u");
    } else if (checkedMessage.includes("no u") || checkedMessage.includes("no you")) {
        message.channel.send("Fine! you win :x");
    } else if (checkedMessage.includes("huh")) {
        message.channel.send("Huh?");
    } else if (checkedMessage.includes("hm")) {
        message.channel.send("Hmm indeed...") || message.channel.send("Hm?");
    } else if (checkedMessage.includes("pog")) {
        message.channel.send("POG!! :O");
    } else if (checkedMessage === "what" || checkedMessage === "wat" || checkedMessage === "wut") {
        message.channel.send("Wut?");
    } else if (checkedMessage.includes("nani")) {
        message.channel.send("NANI!?");
    } else if (checkedMessage.includes("ahh") || checkedMessage.includes("aaa")) {
        message.channel.send("AAH?");
    } else if (checkedMessage === "interesting") {
        message.channel.send("Stop saying that!");
    } else if (checkedMessage === "you suck") {
        message.channel.send("Okay :c");
    } else if (checkedMessage.includes("shut up")) {
        message.channel.send("Meanie! :c");
    }
    
    // prefix barrier
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hello' || command === 'hi' || command === 'hey') {
        client.commands.get('hello').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'dev' || command === 'developer' || command === 'about') {
        client.commands.get('dev').execute(message, args);
    } else if (command === 'clear' || command === 'delete' || command === 'clean') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'give') {
        client.commands.get('give').execute(message, args);
    } else if (command === 'sad') {
        client.commands.get('sad').execute(message, args);
    } else if (command === 'secret') {
        client.commands.get('secret').execute(message, args);
    } else if (command === 'urban' || command === 'define') {
        client.commands.get('urban').execute(message, args);
    } else if (command === 'joke') {
        client.commands.get('joke').execute(message, args);
    }
});















client.login(process.env.TOKEN);