const Discord = require('discord.js');

module.exports = {
    name: 'help',
    run: (bot, message, args) => {
      // Envoyez le message de rappel
      message.channel.send("Voici les différentes commandes : !spoil !date !saison !wb !groupe");
    },
  };