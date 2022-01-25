import { Company } from 'src/companies/schemas/company.schema';
import { Job } from 'src/jobs/schemas/job.schema';

export interface IExternalJobSearcherService {
    getCompanies();
    getJobs(): Job[];
}
