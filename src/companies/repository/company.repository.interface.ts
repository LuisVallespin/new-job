import { IBaseRepository } from 'src/generic/repositories/base-repository.interface';
import { Company } from '../schemas/company.schema';

export interface ICompanyRepository extends IBaseRepository<Company> {}
