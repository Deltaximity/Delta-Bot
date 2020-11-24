module.exports = {
    name: 'pun',
    description: "generates a random pun!",
    execute(message, args) {
        const puns = [
            'Wanna hear a joke about paper? it\'s tearable',
            'I wanna make a joke about Sodium but Na...'
        ];

        const random = ~~(Math.random() * puns.length);
        message.channel.send(puns[random]);
    }
}