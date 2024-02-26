import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EstimateTimeline {
  @Prop({ required: true })
  from: Date;

  @Prop({ required: true })
  to: Date;
}

export const EstimateTimelineSchema =
  SchemaFactory.createForClass(EstimateTimeline);
