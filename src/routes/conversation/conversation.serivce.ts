import { Injectable } from '@nestjs/common';
import { ConversationI } from 'src/app.types';
import { fileContent, writeContent } from 'utils';

@Injectable()
export class ConversationService {
  async getConversations() {
    const convs = await fileContent();
    return convs;
  }

  async getConversation(id: string) {
    const conversationLog = await fileContent();

    const findConv = conversationLog.find((cnv) => cnv.id === id);
    if (findConv === undefined) {
      return { status: 404, message: 'No conversation found' };
    } else {
      return findConv;
    }
  }

  async addConversation({ ...args }: ConversationI) {
    const conversationLog = await fileContent();

    conversationLog.push({ ...args });
    try {
      await writeContent(conversationLog);
      return { status: 200, message: 'Successfully created conversation' };
    } catch (error) {
      return { error, message: 'Something went wrong' };
    }
  }
  updateConversation(id: string) {
    console.log({ id });
  }
}
