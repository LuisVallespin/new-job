import { FilterQuery, Model } from 'mongoose';
import { IBaseRepository } from './base-repository.interface';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
    protected constructor(private model: Model<T>) {}

    async findOne(filterQuery: FilterQuery<T>): Promise<T> {
        return this.model.findOne(filterQuery);
    }

    async find(filterQuery: FilterQuery<T>): Promise<T[]> {
        return this.model.find(filterQuery);
    }

    async create(item: T): Promise<T | any> {
        const newItem = new this.model(item);
        return newItem.save();
    }

    async update(filterQuery: FilterQuery<T>, item: Partial<T>): Promise<T> {
        return this.model.findOneAndUpdate(filterQuery, item, {
            new: true,
        });
    }

    async createMany(items: T[]): Promise<T[]> {
        return this.model.insertMany(items);
    }
}
