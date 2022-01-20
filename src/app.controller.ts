import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { ExternalJobSearcherService } from './external-job-searcher/external-job-searcher.service';
import { Job } from './jobs/schemas/job.schema';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly externalJobService: ExternalJobSearcherService,
    ) {}

    @Get('get20')
    get20(): Observable<Job[]> {
        return this.externalJobService.getAll(20);
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
