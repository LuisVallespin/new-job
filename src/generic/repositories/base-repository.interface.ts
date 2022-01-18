import { FilterQuery } from 'mongoose';

export interface IBaseRepository<T> {
    findOne(filterQuery: FilterQuery<T>): Promise<T>;

    find(filterQuery: FilterQuery<T>): Promise<T[]>;

    create(item: T): Promise<T>;

    update(filterQuery: FilterQuery<T>, item: Partial<T>): Promise<T>;
}
