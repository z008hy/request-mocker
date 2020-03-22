import { Injectable } from '@nestjs/common';
import { Request } from './request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { createRequestDto } from './dto/createRequestDto';
import { updateRequestDto } from './dto/updateRequestDto';
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

    async update(id: string, requestData: updateRequestDto): Promise<Request> {
      const request = await this.requestRepository.findOne(id);
      request.name = requestData.name;
      request.note = requestData.note;
      request.mocker = requestData.mocker;
      request.type = requestData.type;
      request.params = JSON.stringify(requestData.params);
      request.headers = JSON.stringify(requestData.headers);
      request.url = requestData.url;
      return this.requestRepository.save(request);
    }

    async delete(id: string): Promise<boolean> {
      const deleteResult = await this.requestRepository.delete(id);
      return deleteResult.affected !== 0;
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
  
      const total = await qb.getCount();
  
      if ('pageSize' in query && 'size' in query) {
        qb.skip(query.size * query.current - 1);
        qb.take(query.size);
      }
  
      const requests = await qb.getMany();
  
      return {
        current: Number(query.current) || 1,
        pageSize: Number(query.size) || 0,
        items: requests,
        total,
      };
    }
}