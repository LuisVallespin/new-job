import { Body, Get, Param, Patch, Post } from '@nestjs/common';
import { IBaseService } from '../services/base-service.interface';
import { IBaseController } from './base-controller.interface';

export abstract class BaseController<T> implements IBaseController<T> {
    constructor(private service: IBaseService<T>) {}

    @Get(':_id')
    async getOne(@Param('_id') _id: string): Promise<T> {
        return this.service.getOneById(_id);
    }

    @Get()
    async getAll(): Promise<T[]> {
        return this.service.getAll();
    }

    @Post()
    async create(@Body() dto: any): Promise<T> {
        return this.service.create(dto);
    }

    @Patch(':_id')
    async update(@Param('_id') _id: string, @Body() dto: any): Promise<T> {
        return this.service.update(_id, dto);
    }
}
