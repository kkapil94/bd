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
import { HydratedDocument, now } from 'mongoose';
import { DocumentEntityHelper } from 'src/utils/document-entity.helper';

export type JobDocument = HydratedDocument<Job>;

//jobs schema
@Schema({ timestamps: true })
export class Job extends DocumentEntityHelper {
  @Prop({ required: true, type: ClientDetailsSchema })
  clientDetails: ClientDetails;

  @Prop({ required: true, ref: SERVICE_MODEL })
  services: Service[];

  @Prop({ default: [], ref: BID_MODEL })
  bids: Bid[];

  @Prop({
    required: true,
    enum: Object.values(JOB_STATUS),
    default: JOB_STATUS.PENDING,
  })
  jobStatus: JOB_STATUS;

  @Prop({ required: true, type: BudgetAndTimelineSchema })
  budgetAndTimeline: BudgetAndTimeline;

  @Prop({ default: now })
  createdAt: Date;

  @Prop({ default: now })
  updatedAt: Date;
}

export const JOB_MODEL = Job.name;
export const JobSchema = SchemaFactory.createForClass(Job);
