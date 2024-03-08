import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/mongoose/database.module';
import { MongooseModelModule } from './schemas/mongoose-model.module';
import { ServiceModule } from './service/service.module';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';
import { JobsModule } from './jobs/jobs.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelModule,
    ServiceModule,
    JobsModule,
    ChatModule,
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class AppModule {}
