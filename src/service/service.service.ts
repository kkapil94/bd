import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SERVICE_MODEL,
  Service,
  ServiceDocument,
} from 'src/schemas/serviceSchema/service.schema';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(SERVICE_MODEL) private serviceModel: Model<ServiceDocument>,
  ) {}

  async getServiceById(@Param('id') id: number): Promise<Service> {
    try {
      const service = await this.serviceModel.findOne({ id });
      if (!service) {
        throw new NotFoundException();
      }
      return service;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException();
    }
  }

  async getAllServices(): Promise<Service[]> {
    try {
      const services = await this.serviceModel.find();
      if (!services) {
        throw new NotFoundException('services not available');
      }
      return services;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const { service_id, service_type } = createServiceDto;

    try {
      const service = await this.serviceModel.findOne({ service_id });
      if (service) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            errors: {
              status: 'serviceExists',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
      return await this.serviceModel.create({ service_id, service_type });
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException();
    }
  }
}
