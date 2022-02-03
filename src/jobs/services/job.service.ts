import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/generic/services/base-service.abstract';
import { JobRepository } from '../repository/job.repository';
import { Job } from '../schemas/job.schema';
import { IJobService } from './job.service.interface';

@Injectable()
export class JobService extends BaseService<Job> implements IJobService {
    constructor(private readonly jobRepository: JobRepository) {
        super(jobRepository);
    }

    async getJobsWithCompanies(): Promise<Job[]> {
        return await this.jobRepository.getJobsWithCompanies();
    }
}
