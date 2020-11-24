module.exports = {
    name: 'help',
    description: "A command for displaying all commands, *one to rule them all*!",
    execute(message, args) {
        message.channel.send("I've come for the rescue! wait, I can't.");
        setTimeout(() => {
            message.channel.send("Program me a command list dammit!");
        }, 3000);
    }
}