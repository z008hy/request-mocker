import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { Request } from './request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Request])],
    providers: [RequestService],
    controllers: [RequestController]
})
export class RequestModule {
  
}