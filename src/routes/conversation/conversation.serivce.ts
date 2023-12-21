import { Injectable } from '@nestjs/common';
import { ConversationI } from 'src/app.types';
import { fileContent, writeContent } from 'utils';
import { UpdateConvI } from './conversation.types';

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
  async updateConversation({ convId, messages }: UpdateConvI) {
    const conversationLog = await fileContent();

    const conversation = conversationLog.find((conv) => conv.id === convId);

    if (!conversation) {
      return {
        status: 404,
        message: 'No conversation found with the given ID',
      };
    }

    conversation.messages.push(...messages);

    try {
      await writeContent(conversationLog);
      return { status: 200, message: 'Successfully updated conversation' };
    } catch (error) {
      return { error, message: 'Something went wrong' };
    }
  }
}
