import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyRepository } from './repository/companies.repository';
import { Company, CompanySchema } from './schemas/company.schema';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema },
        ]),
    ],
    controllers: [CompanyController],
    providers: [CompanyRepository, CompanyService],
})
export class CompanyModule {}
