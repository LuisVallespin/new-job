import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BaseController } from 'src/generic/controllers/base-controller.abstract';
import { Job } from '../schemas/job.schema';
import { JobService } from '../services/job.service';
import { IJobController } from './job.controller.interface';
import { Response } from 'express';
import { ExternalJobSearcherService } from 'src/external-job-searcher/external-job-searcher.service';
import { CompanyService } from 'src/companies/services/company.service';
import { Company } from 'src/companies/schemas/company.schema';

@Controller('job')
export class JobController
    extends BaseController<Job>
    implements IJobController
{
    constructor(
        private jobService: JobService,
        private externalJobService: ExternalJobSearcherService,
        private companyService: CompanyService,
    ) {
        super(jobService);
    }

    @Get('populate')
    createMany(@Res() res: Response): void {
        try {
            this.externalJobService.getJobs().subscribe(async (jobs: Job[]) => {
                const jobsToAdd = jobs.map(async (job: Job) => {
                    const relatedCompany: Company =
                        await this.companyService.getOneByName(
                            job.company.name,
                        );
                    this.create({ ...job, company: relatedCompany });
                });
            });
            res.status(HttpStatus.OK).send();
        } catch (err) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}
