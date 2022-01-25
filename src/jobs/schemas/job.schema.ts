import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Company } from 'src/companies/schemas/company.schema';

export type JobDocument = Job & Document;

@Schema()
export class Job {
    @Prop()
    name: string;

    @Prop()
    salary: number;

    @Prop()
    location: string;

    @Prop()
    description: string;

    @Prop()
    url: string;

    @Prop()
    publicationDate: Date;

    @Prop()
    contractType: string;

    @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Company' })
    company: Company;
}

export const JobSchema = SchemaFactory.createForClass(Job);
