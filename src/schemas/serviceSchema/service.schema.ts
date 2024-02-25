import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SERVICE_TYPE } from 'src/constants/service.constants';

@Schema({ timestamps: true })
export class Service {
  @Prop({ enum: Object.keys(SERVICE_TYPE), required: true, type: String })
  type: SERVICE_TYPE;

  @Prop({ required: true })
  s_id: number;
}

export type ServiceDocument = Service & Document;
export const SERVICE_MODEL = Service.name;
export const ServiceSchema = SchemaFactory.createForClass(Service);
