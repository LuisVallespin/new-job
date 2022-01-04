/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { JobDto } from './dto/job.dto';
import { JobsService } from './jobs.service';
import { Job } from './schemas/job.schema';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {}

    @Get(':_id')
    async getJob(@Param('_id') _id: string): Promise<Job> {
        return this.jobsService.getOneById(_id);
    }

    @Get()
    async getAll(): Promise<Job[]> {
        return this.jobsService.getAll();
    }

    @Post()
    async createJob(@Body() jobDto: JobDto): Promise<Job> {
        return this.jobsService.createJob(jobDto);
    }

    @Patch(':_id')
    async updateJob(
        @Param('_id') _id: string,
        @Body() jobDto: JobDto,
    ): Promise<Job> {
        return this.jobsService.updateJob(_id, jobDto);
    }
}
