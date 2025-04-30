import { Module } from '@nestjs/common';
import { PhishingTrackingService } from './phishing-tracking.service';
import { PhishingTrackingController } from './phishing-tracking.controller';
import { PhishingTracking, PhishingTrackingSchema } from './schemas/phishing-tracking.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [
    MongooseModule.forFeature([{ name: PhishingTracking.name, schema: PhishingTrackingSchema }]),
  ],
  controllers: [PhishingTrackingController],
  providers: [PhishingTrackingService],
})
export class PhishingTrackingModule {}
