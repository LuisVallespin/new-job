import { IBaseController } from 'src/generic/controllers/base-controller.interface';
import { Company } from '../schemas/company.schema';
import { Response } from 'express';

export interface ICompanyController extends IBaseController<Company> {
    createMany(res: Response): any;
}
