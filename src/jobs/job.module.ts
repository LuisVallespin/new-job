import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';
import { JobController } from './controllers/job.controller';
import { JobService } from './services/job.service';
import { JobRepository } from './repository/job.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
    ],
    controllers: [JobController],
    providers: [JobService, JobRepository],
})
export class JobModule {}
