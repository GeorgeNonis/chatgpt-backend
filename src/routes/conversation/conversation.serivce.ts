import { Injectable } from '@nestjs/common';
import { fileContent } from 'utils/readFile';

@Injectable()
export class ConversationService {
  async getConversations() {
    console.log(await fileContent());
  }

  getConversation(id: string) {
    console.log({ id });
  }

  addConversation(id: string) {
    console.log({ id });
  }
  updateConversation(id: string) {
    console.log({ id });
  }
}
