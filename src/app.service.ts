import { Injectable } from '@nestjs/common';
import { ConvI } from './app.types';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class AppService {
  private jsonFilePath = path.join(__dirname, '../data/history.json');

  async addChat(chat: ConvI): Promise<ConvI | string> {
    try {
      const data = await fs.readFile(this.jsonFilePath, 'utf-8');
      const chats = JSON.parse(data);
      console.log({ chats });

      chats.push(chat);

      console.log({ chats });
      await fs.writeFile(this.jsonFilePath, JSON.stringify(chats, null, 2));

      return chat;
    } catch (error) {
      console.error('Error adding chat:', error);
      return 'Failed to add chat';
    }
  }
}
