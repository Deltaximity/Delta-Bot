const { default: fetch } = require("node-fetch");

module.exports = {
    name: 'joke',
    description: "refresh your mind with a little joke",
    async execute(message, args) {
        const { id, type, setup, punchline } = await fetch(`https://official-joke-api.appspot.com/jokes/random`).then(response => response.json());
        message.channel.send(setup);
        setTimeout(() => {
            message.channel.send(punchline);
        }, 4000);
    }
}