const Discord = require("discord.js");

module.exports = async (bot, message) => {
  let prefix = "!";

  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let commandName = messageArray[0].slice(prefix.length);
  let args = messageArray.slice(1);

  let command;
  try {
    command = require(`../Commandes/${commandName}`);
  } catch (error) {
    // La commande n'existe pas, envoie un message de retour à l'utilisateur
    return message.reply(`${message.author} la commande : !${commandName} n'existe pas !`);
  }

  // Array des IDs de rôles autorisés pour les différentes commandes
  const authorizedRoles = {
    ping: ["776814298303037500", "1109430515452366860"],
    date: ["776814298303037500", "1109430515452366860","1087770639164772472"],
    spoil: ["776814298303037500", "1109430515452366860","1087770639164772472"],
    help: ["776814298303037500", "1109430515452366860","1087770639164772472"],
    saison: ["776814298303037500", "1109430515452366860","1087770639164772472"],
    wb: ["776814298303037500", "1109430515452366860","1087770639164772472"],
    groupe: ["776814298303037500", "1109430515452366860","1087770639164772472"]
    
    // Ajoutez d'autres commandes et leurs rôles autorisés ici
  };

  // Vérifie si la commande spécifique nécessite des autorisations spéciales
  if (authorizedRoles[commandName]) {
    // Vérifie si l'utilisateur a l'un des rôles autorisés pour cette commande
    if (!authorizedRoles[commandName].some(roleID => message.member.roles.cache.has(roleID))) {
      // Utilisateur non autorisé, envoie un message de retour
      return message.reply(`${message.author} Vous n'avez pas les droits.`);
    }
  }

  command.run(bot, message, args);
};