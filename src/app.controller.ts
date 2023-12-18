import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import * as data from '../data/history.json';
import { Response } from 'express';
import { AppService } from './app.service';
import { ConvI } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHistory(@Res() res: Response) {
    return res.status(HttpStatus.ACCEPTED).json(data);
  }

  @Post()
  async addChat(@Body() data: ConvI) {
    const response = await this.appService.addChat(data);

    return { status: 'success', message: response };
  }
}
