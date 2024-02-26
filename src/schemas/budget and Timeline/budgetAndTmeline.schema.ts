import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  EstimateTimeline,
  EstimateTimelineSchema,
} from './estimate-time.schema';

@Schema({ timestamps: true })
export class BudgetAndTimeline {
  @Prop({ required: true })
  itemizedCostStructure: string;

  @Prop({ required: true, type: EstimateTimelineSchema })
  estimateTimeline: EstimateTimeline;

  @Prop()
  otherDetails: string;
}

export const BUDGET_AND_TIMELINE_MODEL = BudgetAndTimeline.name;
export const BudgetAndTimelineSchema =
  SchemaFactory.createForClass(BudgetAndTimeline);
