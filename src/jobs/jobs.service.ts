/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Company } from 'src/companies/schemas/company.schema';
import { JobDto } from './dto/job.dto';
import { JobsRepository } from './jobs.respository';
import { Job } from './schemas/job.schema';

@Injectable()
export class JobsService {
    constructor(private readonly jobsRepository: JobsRepository) {}

    async getOneById(_id: string): Promise<Job> {
        return this.jobsRepository.findOne({ _id });
    }

    async getAll(): Promise<Job[]> {
        return this.jobsRepository.find({});
    }

    async createJob(job: JobDto) {
        return this.jobsRepository.create({
            name: job.name,
            salary: job.salary,
            searchingFor: job.searchingFor,
            location: job.location,
            schedule: job.schedule,
            description: job.description,
            company: job.company,
        });
    }

    async updateJob(_id: string, job: JobDto): Promise<Job> {
        return this.jobsRepository.update({ _id }, job);
    }
}
