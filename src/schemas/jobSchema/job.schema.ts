import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ClientDetails,
  ClientDetailsSchema,
} from '../clientdetailsSchema/clientDetails.schema';
import { SERVICE_MODEL, Service } from '../serviceSchema/service.schema';
import { BID_MODEL, Bid } from '../bidSchema/bid.schema';
import { JOB_STATUS } from 'src/constants/jobStatus.constant';
import {
  BudgetAndTimeline,
  BudgetAndTimelineSchema,
} from '../budget and Timeline/budgetAndTmeline.schema';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true, type: ClientDetailsSchema })
  client_details: ClientDetails;

  @Prop({ required: true, ref: SERVICE_MODEL })
  services: Service[];

  @Prop({ default: [], ref: BID_MODEL })
  bids: Bid[];

  @Prop({
    required: true,
    enum: Object.keys(JOB_STATUS),
    default: JOB_STATUS.PENDING,
  })
  job_status: JOB_STATUS;

  @Prop({ required: true, type: BudgetAndTimelineSchema })
  budget_and_timeline: BudgetAndTimeline;
}

export type JobDocument = Job & Document;
export const JOB_MODEL = Job.name;
export const JobSchema = SchemaFactory.createForClass(Job);
