import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhishingSimulationModule } from './phishing-simulation/phishing-simulation.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PhishingTrackingModule } from './phishing-tracking/phishing-tracking.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),

    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    PhishingSimulationModule,
    PhishingTrackingModule,
  ],
  // imports: [PhishingSimulationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
