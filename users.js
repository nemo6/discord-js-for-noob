const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js"); // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on('ready', function() {

    // bot.user.setActivity(null)

    for( x of bot.users.array()){
       console.log(x.username)
    }
    
})

bot.login(token)

console.log("done!")
