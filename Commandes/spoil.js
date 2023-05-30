const Discord = require('discord.js');

module.exports = {
    name: 'spoil',
    run: (bot, message, args) => {
      // Envoyez le message de rappel
      message.channel.send("Rappel ! Entre le 2 et 6 juin n'oubliez pas de mettre en spoil vos images, merci pour votre compréhension.");
    },
  };