import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SERVICE_MODEL,
  ServiceDocument,
} from 'src/schemas/serviceSchema/service.schema';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(SERVICE_MODEL) private serviceModel: Model<ServiceDocument>,
  ) {}
  async getAllServices() {
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
}
