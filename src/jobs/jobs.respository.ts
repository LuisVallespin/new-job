import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Job, JobDocument } from './schemas/job.schema';

@Injectable()
export class JobsRepository {
    constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

    async findOne(jobFilterQuery: FilterQuery<Job>): Promise<Job> {
        return this.jobModel.findOne(jobFilterQuery);
    }

    async find(jobsFilterQuery: FilterQuery<Job>): Promise<Job[]> {
        return this.jobModel.find(jobsFilterQuery);
    }

    async create(job: Job): Promise<Job> {
        const newJob = new this.jobModel(job);
        return newJob.save();
    }

    async update(
        jobFilterQuery: FilterQuery<Job>,
        job: Partial<Job>,
    ): Promise<Job> {
        return this.jobModel.findOneAndUpdate(jobFilterQuery, job, {
            new: true,
        });
    }
}
