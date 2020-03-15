import { Get, Post, Controller, Body, Param, Query } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from '../../entity/request.entity';
import { createRequestDto } from './dto/createRequestDto';
import { RequestsRO } from './request.interface';

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

  @Post('create')
  async create(@Body() requestData: createRequestDto ):Promise<Request>{
    return this.requestService.create(requestData);
  }
}