import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentEntityHelper } from 'src/utils/document-entity.helper';

@Schema({ timestamps: true })
export class Bid extends DocumentEntityHelper {
  @Prop({ required: true })
  bid_date: string;

  @Prop({ required: true })
  bidPrice: string;

  @Prop({ required: true })
  bidder: string;

  @Prop({ required: true })
  submissionNumber: string;

  @Prop({ required: true, default: [] })
  userBadges: string[];
}

export const BID_MODEL = Bid.name;
export const BidsSchema = SchemaFactory.createForClass(Bid);
