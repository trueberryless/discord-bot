require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client({ intents: [] });

client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size}`);
    // client.user.setActivity({ name: "mit Code", type: "PLAYING" });
});

client.login(process.env.DISCORD_BOT_TOKEN);
