import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';
import { JobController } from './controllers/job.controller';
import { JobService } from './services/job.service';
import { JobRepository } from './repository/job.repository';
import { HttpModule } from '@nestjs/axios';
import { ExternalJobSearcherService } from 'src/external-job-searcher/external-job-searcher.service';
import { CompanyModule } from 'src/companies/company.module';

@Module({
    imports: [
        CompanyModule,
        MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
        HttpModule,
    ],
    controllers: [JobController],
    providers: [JobService, JobRepository, ExternalJobSearcherService],
})
export class JobModule {}
