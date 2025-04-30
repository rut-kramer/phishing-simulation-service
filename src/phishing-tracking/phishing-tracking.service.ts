import { Injectable } from '@nestjs/common';
import { CreatePhishingTrackingDto } from './dto/create-phishing-tracking.dto';
import { UpdatePhishingTrackingDto } from './dto/update-phishing-tracking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PhishingTracking } from './schemas/phishing-tracking.schema';
import { Model } from 'mongoose';

@Injectable()
export class PhishingTrackingService {
  constructor(@InjectModel(PhishingTracking.name) private trackingModel: Model<PhishingTracking>) {}

  async recordClick(emailAddress: string, context?: string): Promise<void> {
    await this.trackingModel.create({
      emailAddress,
      clickedPhishingLink: true,
      contect: context || 'Default context',
    });
  }

  // async recordClick(userId: string): Promise<void> {
  //   await this.prisma.user.update({
  //     where: { id: userId },
  //     data: { clickedPhishingLink: true, clickedAt: new Date() },
  //   });
  }
