import { Company } from 'src/companies/schemas/company.schema';

export class JobDto {
    name?: string;
    salary?: number;
    searchingFor?: string[];
    location?: string;
    schedule?: string;
    description?: string;
    company?: Company;
}
