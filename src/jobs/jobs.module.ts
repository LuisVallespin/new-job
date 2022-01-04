import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JobsRepository } from './jobs.respository';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
    ],
    controllers: [JobsController],
    providers: [JobsService, JobsRepository],
})
export class JobsModule {}
