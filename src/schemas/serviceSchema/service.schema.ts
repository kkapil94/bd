import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';
import { SERVICE_TYPE } from 'src/constants/service.constants';
import { DocumentEntityHelper } from 'src/utils/document-entity.helper';

export type ServiceDocument = HydratedDocument<Service>;
@Schema({ timestamps: true })
export class Service extends DocumentEntityHelper {
  @Prop({ enum: Object.values(SERVICE_TYPE), required: true, type: String })
  serviceType: SERVICE_TYPE;

  @Prop({ required: true })
  serviceId: number;

  @Prop({ default: now })
  createdAt: Date;

  @Prop({ default: now })
  updatedAt: Date;
}

export const SERVICE_MODEL = Service.name;
export const ServiceSchema = SchemaFactory.createForClass(Service);
