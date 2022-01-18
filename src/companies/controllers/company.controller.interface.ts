import { IBaseController } from 'src/generic/controllers/base-controller.interface';
import { Company } from '../schemas/company.schema';

export interface ICompanyController extends IBaseController<Company> {}
