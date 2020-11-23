module.exports = {
    name: 'clear',
    description: "a command to clear chat",
    async execute(message, args) {
        const amount = args.join(' '); // Amount of messages which should be deleted

        if (!amount) return message.reply("You haven't given an amount of messages which should be deleted!"); // Check if the 'amount' parameter is given
        if (isNaN(amount)) return message.reply("The amount parameter isn't a number!"); // Check if the 'amount' parameter is a number. If not, the command throws an error

        if (amount > 100) return message.reply("You can't delete more than 100 messages at once!"); // Checks if the `amount` integer is bigger than 100
        if (amount < 1) return message.reply("You have to delete at least 1 message!"); // Checks if the `amount` integer is smaller than 1

        await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
            message.channel.bulkDelete(messages);
        });
    }
}