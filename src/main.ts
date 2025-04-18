import { Client, Events, Routes } from 'discord.js';
import 'dotenv/config';

import commands from './commands';
import logger from './utils/logger.utils';

const client = new Client({ intents: [] });

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  commands
    .find((x) => x.name === interaction.commandName)!
    .execute(interaction, client);
});

const main = async () => {
  await client.login(process.env.BOT_TOKEN);

  await client.rest.put(Routes.applicationCommands(client.user!.id), {
    body: commands,
  });

  logger.info('Bot running.');
};

main();
