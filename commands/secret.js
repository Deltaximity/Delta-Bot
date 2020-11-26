module.exports = {
    name: 'secret',
    description: "it's a secret",
    execute(message, args) {
        message.channel.send("Wanna hear my secret?");
        setTimeout(() => {
            message.channel.send("Between you and me... **I think Delta is very dumb**");
            setTimeout(() => {
                message.channel.send("Don't tell him okay?");
            }, 2000);
        }, 6000);
    }
}