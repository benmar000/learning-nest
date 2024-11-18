import { Injectable } from '@nestjs/common';
import config from './config';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! from: ${config.get('env')}`;
  }
}
