import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/mongoose/database.module';
import { MongooseModelModule } from './schemas/mongoose-model.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelModule,
    ServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
