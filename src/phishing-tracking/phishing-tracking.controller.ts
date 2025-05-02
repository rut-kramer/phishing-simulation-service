import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PhishingTrackingService } from './phishing-tracking.service';

@Controller('phishing-tracking')
export class PhishingTrackingController {
  constructor(private readonly trackingService: PhishingTrackingService) {}

  @Get('track-click')
  async trackClick(@Query('email') email: string) {
    await this.trackingService.recordClick(email);
    return 'Thank you. Your action was recorded.';
  }

  @Get()
  async getAll() {
    console.log('Fetching all tracking records');

    return this.trackingService.getAllTracking();
  }
}
