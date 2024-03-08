import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JOB_MODEL, Job, JobDocument } from 'src/schemas/jobSchema/job.schema';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectModel(JOB_MODEL) private jobModel: Model<JobDocument>) {}

  //get jobs form db
  async getAllJobs(): Promise<Job[]> {
    return await this.jobModel.find();
  }

  //create jobs
  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    const { clientDetails } = createJobDto;
    try {
      return await this.jobModel.create({
        clientDetails,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //update jobs
  // async updateJob(id:number, updateJobDto: UpdateJobDto):Promise<Job>{
  //   const {} = updateJobDto;

  //   const job = await this.jobModel.findById(id);

  //   if(!job){
  //     throw new NotFoundException();
  //   };

  //   try {
  //     const updatedJob = await this.jobModel.updateOne({_id:},{})
  //   } catch (error) {

  //   }
  //
  // }
}
