const Discord = require('discord.js');

// ID du salon où les icônes seront affichées
const salonID = '1102498955146821694';

// ID des emoji correspondant à chaque icône
const emojiIDs = {
    barb: '1112851534909292554',
    sorc: '1112855669696106496',
    rogue: '1112855669696106496',
    druid: '1112852400705896533',
    necro: '1112855588423073823'
};

// Création du client Discord.js
const client = new Discord.Client();

client.on('ready', () => {
    // Récupération du salon par son ID
    const salon = client.channels.cache.get(salonID);

    if (salon && salon.type === 'text') {
        // Envoi du message avec les icônes
        salon.send('Choisissez votre icône en réagissant à ce message :')
            .then((message) => {
                // Réagir avec chaque emoji
                Object.values(emojiIDs).forEach((emojiID) => {
                    message.react(emojiID);
                });
            })
            .catch(console.error);
    } else {
        console.error(`Le salon avec l'ID ${salonID} est introuvable.`);
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (!user.bot && reaction.message.channel.id === salonID) {
        // Vérification si l'emoji réagi correspond à une icône
        const emojiName = Object.keys(emojiIDs).find((name) => name === reaction.emoji.name);

        if (emojiName) {
            const roleID = emojiIDs[emojiName];
            const role = reaction.message.guild.roles.cache.get(roleID);

            if (role) {
                const member = await reaction.message.guild.members.fetch(user);

                if (member) {
                    // Ajout du rôle à l'utilisateur
                    member.roles.add(role)
                        .then(() => console.log(`Rôle ${role.name} ajouté à ${member.user.tag}`))
                        .catch(console.error);
                }
            }
        }
    }
});
