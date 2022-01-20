import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, take } from 'rxjs';
import { Job } from 'src/jobs/schemas/job.schema';

@Injectable()
export class ExternalJobSearcherService {
    constructor(private readonly httpService: HttpService) {}

    getAll(limit: number): Observable<Job[]> {
        return this.httpService
            .get(`https://remotive.io/api/remote-jobs?limit=${limit}`)
            .pipe(
                take(1),
                map((item) => item.data.jobs as Job[]),
            );
    }
}
