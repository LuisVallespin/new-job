import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyRepository } from './repository/companies.repository';
import { Company, CompanySchema } from './schemas/company.schema';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';
import { ExternalJobSearcherService } from 'src/external-job-searcher/external-job-searcher.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema },
        ]),
        HttpModule,
    ],
    controllers: [CompanyController],
    providers: [CompanyRepository, CompanyService, ExternalJobSearcherService],
})
export class CompanyModule {}
