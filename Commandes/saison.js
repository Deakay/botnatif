const Discord = require("discord.js");

module.exports = {
  name: "saison",
  run(bot, message) {
    const targetDate = new Date("2023-07-14T17:00:00+02:00"); // Date cible : 14 juillet 2023 à 17h UTC+2

    // Calcul du temps restant en millisecondes
    const timeRemaining = targetDate.getTime() - Date.now();

    // Conversion du temps restant en jours, heures, minutes et secondes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Création de la chaîne de réponse
    const response = `La :fire: saison 1 :fire: commence dans : ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes` ;

    message.reply(response);
  },
};
