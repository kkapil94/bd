import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/common/address.schema';
import { SERVICE_MODEL, Service } from '../serviceSchema/service.schema';

@Schema()
export class ClientDetails {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ type: AddressSchema, required: true })
  address: Address;
}

export const CLIENT_DETAILS_MODEL = ClientDetails.name;
export const ClientDetailsSchema = SchemaFactory.createForClass(ClientDetails);
