const Discord = require("discord.js");
const fs = require("fs");
const dotenv = require("dotenv")
const chalk = require("chalk")

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.commands = new Discord.Collection();
require('dotenv').config()


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

client.login(process.env.token);
