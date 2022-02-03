import { IBaseService } from 'src/generic/services/base-service.interface';
import { Job } from '../schemas/job.schema';

export interface IJobService extends IBaseService<Job> {
    getJobsWithCompanies(): Promise<Job[]>;
}
