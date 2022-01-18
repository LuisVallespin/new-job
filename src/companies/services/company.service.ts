import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/generic/services/base-service.abstract';
import { CompanyRepository } from '../repository/companies.repository';
import { Company } from '../schemas/company.schema';
import { ICompanyService } from './company.service.interface';

@Injectable()
export class CompanyService
    extends BaseService<Company>
    implements ICompanyService
{
    constructor(private readonly companyRepository: CompanyRepository) {
        super(companyRepository);
    }
}
