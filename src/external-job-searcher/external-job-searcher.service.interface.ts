import { Observable } from 'rxjs';
import { Company } from 'src/companies/schemas/company.schema';
import { Job } from 'src/jobs/schemas/job.schema';

export interface IExternalJobSearcherService {
    getCompanies(): Observable<Company[]>;
    getJobs(): Observable<Job[]>;
}
