const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "_";

Client.on("ready" , () => {
    console.log("Shir0-Management est prêt à bosser !");
    Client.user.setActivity("SlowlyLife",  {type: 'PLAYING'});
});

Client.on("guildMemberAdd", member => {
    console.log("Un membre à rejoint le serveur discord");
    member.guild.channels.cache.find(channel => channel.id ==="843145202750718006").send( "**<@" + member.id + "> Bienvenue sur SlowlyLife. Merci de lire le règlement avant de continuer !**");
});

Client.on("message" , message => {

    if(message.author.bot) return;

    if(message.content == prefix + "aide"){
        message.reply("Si vous avez besoin d'un staff ouvrer un ticket dans le salon nouveau ticket ou vous patientez dans un salon vocal attente d'aide.");
    }

    if(message.content == prefix + "identifiant"){
        message.reply("*Vous avez pour identifiant* : " + message.author.id );
    }

    console.log("message");
});


Client.login("ODM2NzYwOTg4ODI0NTAyMzAy.YIisZg.JjgPl2rnNBk3UJWAZ0DZ6v7TH6U");