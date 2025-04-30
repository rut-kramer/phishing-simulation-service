import { PartialType } from '@nestjs/mapped-types';
import { CreatePhishingTrackingDto } from './create-phishing-tracking.dto';

export class UpdatePhishingTrackingDto extends PartialType(CreatePhishingTrackingDto) {}
