import * as fs from 'fs/promises';
import { join } from 'path';
import { ConversationI } from 'src/app.types';

const dir = join(__dirname, '../data/history.json');

export const fileContent = async (): Promise<ConversationI[]> => {
  const data = await fs.readFile(dir, 'utf-8');
  const chats = JSON.parse(data);

  return chats;
};

export const writeContent = async <T>(content: T) => {
  await fs.writeFile(dir, JSON.stringify(content, null, 2));
};
