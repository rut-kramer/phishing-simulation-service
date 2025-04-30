import { Module } from '@nestjs/common';
import { PhishingTrackingService } from './phishing-tracking.service';
import { PhishingTrackingController } from './phishing-tracking.controller';

@Module({
  controllers: [PhishingTrackingController],
  providers: [PhishingTrackingService],
})
export class PhishingTrackingModule {}
