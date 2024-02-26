import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from 'src/schemas/serviceSchema/service.schema';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private service: ServiceService) {}

  @Get()
  getAllServices(): Promise<Service[]> {
    return this.service.getAllServices();
  }

  @Post()
  createService(@Body() createServiceDto: CreateServiceDto): Promise<Service> {
    return this.service.createService(createServiceDto);
  }
}
