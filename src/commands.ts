import Command from './models/Command.model';

const ping: Command = {
  name: 'ping',
  description: 'Pings the bot and shows the latency.',
  execute: (interaction, client) => {
    interaction.reply({
      content: `Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`,
      ephemeral: true,
    });
  },
};

const commands: Command[] = [ping];

export default commands;
