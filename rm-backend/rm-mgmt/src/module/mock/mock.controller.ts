import { Controller, Post, Body } from '@nestjs/common';
import * as Mock from 'mockjs';
import { mockerDto } from './dto/mockDto';

interface MockResult {
  isPass: boolean,
  result: any, 
}

const json2var = (json) : any => {
  return (new Function("return " + json))();
}

@Controller('mock')
export class MockController {
  constructor() {}

  @Post('/')
  mock(@Body() mocker : mockerDto): MockResult {
    const mockResult: MockResult = {
      isPass: false,
      result: '',
    };
    try {
      const mockerResult = json2var(mocker.mocker);
      if (typeof mockResult === 'function') {
      }
      if (typeof mockResult === 'object') {
        mockResult.result = Mock.mock(mockerResult);
        mockResult.isPass = true;
      }
    } catch (error) {
      mockResult.result = error.toString();
    }
    return mockResult;
  }
}
