import Command from './models/Command.model';
import logger from './utils/logger.utils';

const ping: Command = {
  name: 'ping',
  description: 'Pings the bot and shows the latency.',
  execute: (interaction, client) => {
    logger.info(`Pinging bot for ${interaction.user.tag}.`);
    interaction.reply({
      content: `Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`,
      ephemeral: true,
    });
  },
};

const commands: Command[] = [ping];

export default commands;
