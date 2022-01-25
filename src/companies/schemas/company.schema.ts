import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    @Prop()
    name: string;

    @Prop()
    logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
