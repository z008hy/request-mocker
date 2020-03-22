import { Get, Post, Controller, Body, Param, Query, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.entity';
import { createRequestDto } from './dto/createRequestDto';
import { updateRequestDto } from './dto/updateRequestDto';
import { RequestsRO } from './request.interface';
import { DeleteResult } from 'typeorm';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  async findAll(@Query() query):Promise<RequestsRO>{
    return this.requestService.findAll(query);
  }

  @Get('/:id')
  async findOne(@Param('id') id):Promise<Request>{
    return this.requestService.findOne(id);
  }

  @Post('/')
  async create(@Body() requestData: createRequestDto ):Promise<Request>{
    return this.requestService.create(requestData);
  }

  @Post('/:id')
  async update(@Param('id') id, @Body() requestData: updateRequestDto ):Promise<Request>{
    return this.requestService.update(id, requestData);
  }

  @Delete('/:id')
  async delete(@Param('id') id): Promise<boolean> {
    return this.requestService.delete(id);
  }
}