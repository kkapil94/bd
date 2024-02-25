import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JOB_MODEL, JobSchema } from './jobSchema/job.schema';
import { SERVICE_MODEL, ServiceSchema } from './serviceSchema/service.schema';

const MODELS = [
  {
    name: JOB_MODEL,
    schema: JobSchema,
  },
  {
    name: SERVICE_MODEL,
    schema: ServiceSchema,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelModule {}
