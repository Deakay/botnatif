const Discord = require('discord.js');

const groups = [
    { name: 'Groupe 1', members: ['Ocks', 'Spaark', 'Personne', 'Personne'] },
    { name: 'Groupe 2', members: ['Deakay', 'Kiren-2704', 'Personne', 'Personne'] },
    // Ajoutez ici les autres groupes selon vos besoins
];

module.exports = {
    name: 'groupe',
    run: (bot, message, args) => {
        const grid = groups.map((group) => `${group.name}: ${group.members.join(', ')}`).join('\n');

        if (grid.trim().length === 0) {
            message.channel.send("La grille est vide.");
        } else {
            let response = 'Groupes Diablo IV :';
            for (const group of groups) {
                response += `\n\n${group.name} :\n`;
                let count = 1;
                for (const member of group.members) {
                    response += `${member}, `;
                    count++;
                }
            }
            message.channel.send(response);
        }
    },
};
