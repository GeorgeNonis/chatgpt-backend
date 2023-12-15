import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import * as data from '../data/history.json';
import { Response } from 'express';
console.log({ data });
@Controller()
export class AppController {
  @Get()
  getHistory(@Res() res: Response) {
    return res.status(HttpStatus.ACCEPTED).json(data);
  }
}
