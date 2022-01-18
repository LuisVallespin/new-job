import { IBaseController } from 'src/generic/controllers/base-controller.interface';
import { Job } from '../schemas/job.schema';

export interface IJobController extends IBaseController<Job> {}
