import { Controller, Param, Post } from '@nestjs/common';
import { PhishingSimulationService } from './phishing-simulation.service';

@Controller('phishing')
export class PhishingSimulationController {
  constructor(
    private readonly phishingSimulationService: PhishingSimulationService,
  ) {}
  @Post('send/:email')
  async startSimulation(@Param('email') email: string) {
    return this.phishingSimulationService.sendEmail(email);
  }
}
