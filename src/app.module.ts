import { CompanyModule } from './companies/company.module';
import { JobModule } from './jobs/job.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
