import { Injectable } from '@nestjs/common';
import { Request } from '../../entity/request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { createRequestDto } from './dto/createRequestDto';
import { RequestsRO } from './request.interface';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(Request)

    private readonly requestRepository: Repository<Request>) { }
    
    async create(requestData: createRequestDto): Promise<Request> {
        const request = new Request();
        request.name = requestData.name;
        request.note = requestData.note;
        request.mocker = requestData.mocker;
        request.type = requestData.type;
        request.params = JSON.stringify(requestData.params);
        request.headers = JSON.stringify(requestData.headers);
        request.url = requestData.url;

        return this.requestRepository.save(request);
    }

    async findOne(id: string): Promise<Request> {
      return this.requestRepository.findOne(id);
    }

    async findAll(query): Promise<RequestsRO> {
      const qb = await getRepository(Request)
        .createQueryBuilder('request');

      qb.where("1 = 1");

      if ('name' in query) {
        qb.andWhere("request.name LIKE :name", { name: `%${query.name}%` });
      }

      if ('url' in query) {
        qb.andWhere("request.url LIKE :url", { url: `%${query.url}%` });
      }

      if ('type' in query) {
        qb.andWhere("request.type = :type", { type: query.type });
      }
  
      qb.orderBy('request.createTime', 'DESC');
  
      const count = await qb.getCount();
  
      if ('limit' in query) {
        qb.limit(query.limit);
      }
  
      if ('offset' in query) {
        qb.offset(query.offset);
      }
  
      const requests = await qb.getMany();
  
      return { requests, count };
    }
}