import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('personas')
  getPersons(): any {
    return [{
      nombre: 'Alvaro',
      edad: 25
    },
    {
      nombre: 'Lucia',
      edad: 34
    },
    {
      nombre: 'Jorge',
      edad: 64
    },
    {
      nombre: 'Amanda',
      edad: 28
    }];
  }
}
