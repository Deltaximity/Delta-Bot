module.exports = {
    name: 'say',
    description: "a command to diguise",
    execute(message, args) {
        // get input
        let input = message.content;
        let actualInput = input.substr('5');

        // delete message
        
        // return input
        message.channel.send(actualInput);
    }
}