import { IBaseService } from 'src/generic/services/base-service.interface';
import { Company } from '../schemas/company.schema';

export interface ICompanyService extends IBaseService<Company> {}
