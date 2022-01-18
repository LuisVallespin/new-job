import { IBaseRepository } from '../repositories/base-repository.interface';
import { IBaseService } from './base-service.interface';

export abstract class BaseService<T> implements IBaseService<T> {
    constructor(private repository: IBaseRepository<T>) {}

    async getOneById(_id: string): Promise<T> {
        return this.repository.findOne({ _id });
    }

    async getAll(): Promise<T[]> {
        return this.repository.find({});
    }

    create(dto: any): Promise<T> {
        return this.repository.create({
            ...dto,
        });
    }

    async update(_id: string, dto: any): Promise<T> {
        return this.repository.update({ _id }, dto);
    }
}
