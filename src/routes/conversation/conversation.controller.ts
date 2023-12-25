import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ConversationService } from './conversation.serivce';
import { ConvI, ConversationI } from 'src/app.types';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  getConversations() {
    return this.conversationService.getConversations();
  }
  @Get(':id')
  getConversation(@Param('id') id: string) {
    return this.conversationService.getConversation(id);
  }
  @Post(':id')
  addConversation(@Param('id') id: string, @Body() data: ConversationI) {
    return this.conversationService.addConversation({ id, ...data });
  }
  @Patch(':id')
  updateConversation(
    @Param('id') id: string,
    @Body('messages') messages: ConvI[],
  ) {
    return this.conversationService.updateConversation({
      convId: id,
      messages,
    });
  }
}
