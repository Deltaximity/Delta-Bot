module.exports = {
    name: 'hello',
    description: "this is a greeting command",
    execute(message, args) {
        message.channel.send('Hellu! ^^');
    }
}