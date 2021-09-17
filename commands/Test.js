//Creating a command

module.exports = {
    name: "Test", //Set a name for the command
    description: "A description here.", //Set a description for the command
    execute: (client, message, args, Discord) => { //Get the client, message, args, Discord
        //start to code here
        message.channel.send("The bot is working !") //send a message
        message.reply("The bot is working") //Reply to the message.
    }
}