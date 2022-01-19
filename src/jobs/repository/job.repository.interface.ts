import { IBaseRepository } from 'src/generic/repositories/base-repository.interface';
import { Job } from '../schemas/job.schema';

export interface IJobRepository extends IBaseRepository<Job> {}
