export interface IBaseController<T> {
    getOne(_id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(dto: any): Promise<T>;
    update(_id: string, dto: any): Promise<T>;
}
