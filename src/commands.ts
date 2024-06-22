import Command from "./models/Command.model";

const ping: Command = {
  name: 'ping',
  description: 'Pings the bot and shows the latency.',
  execute: (interaction, client) => {
    // @ts-ignore
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  },
};

const commands: Command[] = [ping];

export default commands;
