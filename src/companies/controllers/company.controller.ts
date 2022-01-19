import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generic/controllers/base-controller.abstract';
import { Company } from '../schemas/company.schema';
import { CompanyService } from '../services/company.service';
import { ICompanyController } from './company.controller.interface';

@Controller('company')
export class CompanyController
    extends BaseController<Company>
    implements ICompanyController
{
    constructor(private companyService: CompanyService) {
        super(companyService);
    }
}
