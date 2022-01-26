import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ExternalJobSearcherService } from 'src/external-job-searcher/external-job-searcher.service';
import { BaseController } from 'src/generic/controllers/base-controller.abstract';
import { Company } from '../schemas/company.schema';
import { CompanyService } from '../services/company.service';
import { ICompanyController } from './company.controller.interface';
import { Response } from 'express';
@Controller('company')
export class CompanyController
    extends BaseController<Company>
    implements ICompanyController
{
    constructor(
        private companyService: CompanyService,
        private externalJobService: ExternalJobSearcherService,
    ) {
        super(companyService);
    }

    @Get('populate')
    createMany(@Res() res: Response): void {
        try {
            this.externalJobService
                .getCompanies()
                .subscribe((companies: Company[]) => {
                    this.companyService.createMany(
                        this.externalJobService.mapCompanies(companies),
                    );
                });
            res.status(HttpStatus.OK).send();
        } catch (err) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}
