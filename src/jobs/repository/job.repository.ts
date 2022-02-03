import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/generic/repositories/base-repository.abstract';
import { Job } from '../schemas/job.schema';
import { IJobRepository } from './job.repository.interface';

export class JobRepository
    extends BaseRepository<Job>
    implements IJobRepository
{
    constructor(
        @InjectModel('Job')
        private readonly jobRepository: Model<Job>,
    ) {
        super(jobRepository);
    }

    async getJobsWithCompanies(): Promise<Job[]> {
        return await this.jobRepository
            .find()
            .populate('company', 'name logo -_id');
    }
}
