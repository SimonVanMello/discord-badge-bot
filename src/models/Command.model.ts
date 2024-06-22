import { CacheType, Client, Interaction } from "discord.js";

export default interface Command {
  name: string;
  description: string;
  execute: (interaction: Interaction<CacheType>, client: Client) => void;
}
