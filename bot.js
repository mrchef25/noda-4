const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Botas veikia');
})


bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

    if(message.content.toLowerCase() === '!ausines')
    message.reply('VIPER V380 RGB 7.1 SURROUND SOUND GAMING HEADSET');

    else if(message.content.toLowerCase() === '!gpu')
       message.reply('NVIDIA GeForce GTX 1650 4gb');

    else if(message.content.toLowerCase() === '!cpu')
       message.reply('Intel(R) Core(TM) i7-2600 @ 3.40GHz 4 Core(s) (8 logical CPUs)');

    else if(message.content.toLowerCase() === '!mic')
       message.reply('The HyperX QuadCast™');
       
    else if(message.content.toLowerCase() === '!mobo')
       message.reply('Lenovo Mahobay');

    else if(message.content.toLowerCase() === '!ram')
       message.reply('XUM 16gb DDR3 1866MHz (PC3-14900)');

    else if(message.content.toLowerCase() === '!cam')
       message.reply('Canon EOS M50 Mirrorless Camera su EF-M 15-45 mm f/3.5-5.6 IS STM lens)');


});

