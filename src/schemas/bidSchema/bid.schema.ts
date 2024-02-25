import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Bid {
  @Prop({ required: true })
  bid_date: string;

  @Prop({ required: true })
  bid_price: string;

  @Prop({ required: true })
  bidder: string;

  @Prop({ required: true })
  submission_no: string;

  @Prop({ required: true, default: [] })
  user_badges: string[];
}

export const BID_MODEL = Bid.name;
export const BidsSchema = SchemaFactory.createForClass(Bid);
