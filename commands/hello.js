module.exports = {
    name: 'hello',
    description: "this is a greeting command",
    execute(message, args) {
        const greeting = [
            'Hello!',
            'Hii! :D',
            'Hellu! ^^',
            'Hi! c:',
            'Hey c:'
        ];

        const random = ~~(Math.random() * greeting.length);
        message.channel.send(greeting[random]);
    }
}