import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class BudgetAndTimeline {
  @Prop({ required: true })
  itemized_cost_structure: string;

  @Prop({ required: true })
  estimate_timeline: string;

  @Prop()
  other_details: string;
}

export const BUDGET_AND_TIMELINE_MODEL = BudgetAndTimeline.name;
export const BudgetAndTimelineSchema =
  SchemaFactory.createForClass(BudgetAndTimeline);
