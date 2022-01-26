import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, take } from 'rxjs';
import { Company } from 'src/companies/schemas/company.schema';
import { Job } from 'src/jobs/schemas/job.schema';
import { IExternalJobSearcherService } from './external-job-searcher.service.interface';

const defaultLimit = 20;
const defaultUrl = `https://remotive.io/api/remote-jobs?limit=${defaultLimit}`;
@Injectable()
export class ExternalJobSearcherService implements IExternalJobSearcherService {
    constructor(private readonly httpService: HttpService) {}

    getCompanies(): Observable<Company[]> {
        return this.httpService.get(defaultUrl).pipe(
            take(1),
            map((item) => item.data.jobs),
        );
    }

    getJobs(): Observable<Job[]> {
        return this.httpService.get(defaultUrl).pipe(
            take(1),
            map((item) => this.mapJobs(item.data.jobs)),
        );
    }

    public mapCompanies(values: any[]): Company[] {
        return values.map((item: any) => {
            return {
                name: item.company_name,
                logo: item.company_logo,
            };
        });
    }

    public mapJobs(values: any[]): Job[] {
        return values.map((item: any) => {
            return {
                name: item.title,
                url: item.url,
                publicationDate: item.publication_date,
                location: item.candidate_required_location,
                description: item.description,
                salary: item.salary,
                contractType: item.job_type,
                company: {
                    name: item.company_name,
                    logo: item.company_logo,
                },
            };
        });
    }
}
