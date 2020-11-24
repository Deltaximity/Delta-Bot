module.exports = {
    name: 'sad',
    description: "if you ever feel down <3",
    execute(message, args) {
        const sadness = [
            'Aww hope you feel better :c',
            'Don\'t worry, better days will come ^^',
            'I\'m here for you <3',
            'I\'m sorry to hear that :c'
        ];

        const random = ~~(Math.random() * sadness.length);
        message.channel.send(sadness[random]);
    }
}