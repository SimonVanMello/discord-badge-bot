import { CacheType, ChatInputCommandInteraction, Client } from 'discord.js';

export default interface Command {
  name: string;
  description: string;
  execute: (
    interaction: ChatInputCommandInteraction<CacheType>,
    client: Client
  ) => void;
}
