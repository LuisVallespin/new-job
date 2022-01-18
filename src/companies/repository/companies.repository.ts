import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/generic/repositories/base-repository.abstract';
import { Company } from '../schemas/company.schema';
import { ICompanyRepository } from './company.repository.interface';

export class CompanyRepository
    extends BaseRepository<Company>
    implements ICompanyRepository
{
    constructor(
        @InjectModel('Company')
        private readonly companyRepository: Model<Company>,
    ) {
        super(companyRepository);
    }
}
