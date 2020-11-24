module.exports = {
    name: 'cat',
    description: "Random cats",
    async execute(message, args) {
        const fetch = require('node-fetch');
        fetch('https://aws.random.cat/meow').then(response => response.json());
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
    }
}