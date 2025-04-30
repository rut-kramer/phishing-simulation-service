import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PhishingTracking extends Document {
  @Prop({ required: true })
  emailAddress: string;
  
  @Prop({ default: false })
  clickedPhishingLink: boolean;

  @Prop()
  contect: string;
}

export const PhishingTrackingSchema = SchemaFactory.createForClass(PhishingTracking);