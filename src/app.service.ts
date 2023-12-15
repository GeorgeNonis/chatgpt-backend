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
      fs.writeFile(this.jsonFilePath, JSON.stringify(chats, null, 2), (err) => {
        if (err) console.log(err);
        else {
          console.log('File written successfully\n');
          console.log('The written has the following contents:');
          console.log(fs.readFileSync(this.jsonFilePath, 'utf8'));

          console.log(this.jsonFilePath);
        }
      });

      return chat;
    } catch (error) {
      console.error('Error adding chat:', error);
      return 'Failed to add chat';
    }
  }
}
