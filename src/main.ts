import { Client, Routes } from 'discord.js';
import 'dotenv/config';

import commands from './commands';

const client = new Client({ intents: [] });

client.on('interactionCreate', async (interaction) => {
  // @ts-ignore
  commands.find((x) => x.name === interaction.commandName).execute(interaction, client);
});

const main = async () => {
  await client.login(process.env.BOT_TOKEN);

  await client.rest.put(Routes.applicationCommands(client.user!.id), { body: commands });

  console.log('Bot running.')
};

main();
