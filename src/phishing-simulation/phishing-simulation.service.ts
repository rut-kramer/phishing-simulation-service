import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class PhishingSimulationService {
  constructor(private readonly mailService: MailerService) {}

  sendEmail(userEmail: string) {
    const trackingUrl = `http://localhost:3001/phishing-tracking/track-click?email=${encodeURIComponent(userEmail)}`;

    this.mailService.sendMail({
      from: process.env.EMAIL_FROM,
      to: userEmail,
      subject: `Alert`,
      html: `<p>Click <a href="${trackingUrl}">here</a> to verify your account.</p>`,
    });
    // return response;
  }
}
