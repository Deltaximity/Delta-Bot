module.exports = {
    name: 'clear',
    description: "a command to clear chat",
    async execute(message, args) {
        const amount = args.join(' '); // Amount of messages which should be deleted

        if (!amount) return message.reply("I'm sorry, but you can't delete `air`."); // Check if the 'amount' parameter is given
        if (isNaN(amount)) return message.reply("I won't even try to count *that* lol."); // Check if the 'amount' parameter is a number. If not, the command throws an error

        if (amount > 100) return message.reply("Did I mention that the trunk can only hold 100 messages?"); // Checks if the `amount` integer is bigger than 100
        if (amount < 1) return message.reply("Nice try, but that won't work on me."); // Checks if the `amount` integer is smaller than 1

        await message.channel.messages.fetch({ limit: amount}).then(messages => { // Fetches the messages
            message.channel.bulkDelete(messages); // Bulk deletes messages
        });
    }
}