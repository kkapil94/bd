import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JOB_MODEL, Job, JobDocument } from 'src/schemas/jobSchema/job.schema';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectModel(JOB_MODEL) private jobModel: Model<JobDocument>) {}

  async getAllJobs(): Promise<Job[]> {
    return await this.jobModel.find();
  }

  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    const { budgetAndTimeline, clientDetails, services } = createJobDto;
    try {
      return await this.jobModel.create({
        budgetAndTimeline,
        clientDetails,
        services,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
