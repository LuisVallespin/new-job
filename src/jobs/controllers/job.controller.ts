import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/generic/controllers/base-controller.abstract';
import { Job } from '../schemas/job.schema';
import { JobService } from '../services/job.service';
import { IJobController } from './job.controller.interface';

@Controller('job')
export class JobController
    extends BaseController<Job>
    implements IJobController
{
    constructor(private jobService: JobService) {
        super(jobService);
    }
}
