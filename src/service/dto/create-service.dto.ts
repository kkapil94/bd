import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { SERVICE_TYPE } from 'src/constants/service.constants';

export class CreateServiceDto {
  @IsNotEmpty()
  @IsEnum(SERVICE_TYPE)
  service_type: SERVICE_TYPE;

  @IsNotEmpty()
  @IsNumber()
  service_id: number;
}
