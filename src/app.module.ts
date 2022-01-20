import { CompanyModule } from './companies/company.module';
import { JobModule } from './jobs/job.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ExternalJobSearcherService } from './external-job-searcher/external-job-searcher.service';

const env = process.env;

@Module({
    imports: [
        CompanyModule,
        JobModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(
            `mongodb+srv://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@${env.DATABASE_URL}/${env.DATABASE_NAME}?retryWrites=true&w=majority`,
        ),
        HttpModule,
    ],
    controllers: [AppController],
    providers: [AppService, ExternalJobSearcherService],
})
export class AppModule {}
