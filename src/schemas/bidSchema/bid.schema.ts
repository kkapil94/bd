import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DocumentEntityHelper } from 'src/utils/document-entity.helper';
import { JOB_MODEL, Job, JobSchema } from '../jobSchema/job.schema';

enum BID_STATUS {
  SUBMITTED = 1,
  ACCEPTED = 2,
  DECLINED = 3,
}

//bid's schema
@Schema({ timestamps: true })
export class Bid extends DocumentEntityHelper {
  @Prop({ required: true })
  bid_by: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  Price: string;

  @Prop({ required: true })
  submission_number: string;

  @Prop({ required: true })
  files: [
    {
      date_created: number;
      s3_url: string;
      long_filename: string;
      short_filename: string;
    },
  ];

  @Prop({
    required: true,
    enum: Object.values(BID_STATUS),
    default: BID_STATUS.SUBMITTED,
  })
  jobStatus: BID_STATUS;
}

export const BID_MODEL = Bid.name;
export const BidsSchema = SchemaFactory.createForClass(Bid);
