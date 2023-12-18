import * as fs from 'fs/promises';
import path from 'path';

export const fileContent = async () => {
  const dir = path.join(__dirname, '../data/history.json');
  const data = await fs.readFile(dir, 'utf-8');
  const chats = JSON.parse(data);

  return chats;
};
