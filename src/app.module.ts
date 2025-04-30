import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhishingSimulationModule } from './phishing-simulation/phishing-simulation.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PhishingTrackingModule } from './phishing-tracking/phishing-tracking.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://rutc3857:rutc3857@try.obtcfs2.mongodb.net/?retryWrites=true&w=majority&appName=try',
      { dbName: 'dbA' },
    ),
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
