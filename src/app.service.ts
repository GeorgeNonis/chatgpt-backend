import { Injectable } from '@nestjs/common';
import { ConvI } from './app.types';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private jsonFilePath = path.join(__dirname, '../data/history.json');

  addChat(chat: ConvI): ConvI | string {
    try {
      const data = fs.readFileSync(this.jsonFilePath, 'utf-8');
      const chats = JSON.parse(data);
      console.log({ data });
      chats.push(chat);
      console.log({ chats });
      fs.writeFileSync(this.jsonFilePath, JSON.stringify(chats, null, 2));

      return chat;
    } catch (error) {
      console.error('Error adding chat:', error);
      return 'Failed to add chat';
    }
  }
}
