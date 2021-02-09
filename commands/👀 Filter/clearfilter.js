const {MessageEmbed} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
module.exports = {
    name: "clearfilter",
    category: "👀 Filter",
    aliases: ["cf"],
    description: "Clears the Equalizer",
    usage: "clearfilter",
    run: async(client, message, args) => {
      const { channel } = message.member.voice;
      const player = client.manager.players.get(message.guild.id);
      if(!player) return message.channel.send(new MessageEmbed().setColor(ee.wrongcolor).setTitle("There is nothing playing"));  
      if(channel.id !== player.voiceChannel) return message.channel.send(new MessageEmbed().setColor(ee.wrongcolor).setTitle("You need to be in my voice channel to use this command!"));
      player.clearEQ();
      const embed = new MessageEmbed()
      .setTitle("✅ Resetted the Equalizer")
      .addField("🎚 Equalizer: ", `\`❌ Nothing | Equalizer\``)
      .setColor(ee.color).setFooter(ee.footertext, ee.footericon)
      return message.channel.send(embed);
    }
};