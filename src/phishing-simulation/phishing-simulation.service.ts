import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class PhishingSimulationService {
  constructor(private readonly mailService: MailerService) {}

  //   async sendEmail(userEmail: string, userId: string): Promise<void> {
  //     const trackingUrl = `http://yourdomain.com/api/phishing/track-click/${userId}`;

  //     const transporter = nodemailer.createTransport({
  //       service: 'gmail',
  //       auth: {
  //         user: this.configService.get('EMAIL_USER'),
  //         pass: this.configService.get('EMAIL_PASS'),
  //       },
  //     });

  //     const mailOptions = {
  //       from: this.configService.get('EMAIL_USER'),
  //       to: userEmail,
  //       subject: 'Security Alert',
  //       html: `<p>Click <a href="${trackingUrl}">here</a> to verify your account.</p>`,
  //     };

  //     await transporter.sendMail(mailOptions);
  //     console.log('Phishing simulation email sent to', userEmail);
  //   }

  sendEmail(userEmail: string) {
    
    const trackingUrl = `http://yourdomain.com/api/phishing/track-click?email=${encodeURIComponent(userEmail)}`;

    this.mailService.sendMail({
      from: process.env.EMAIL_FROM,
      to: userEmail,
      subject: `Alert`,
      html: `<p>Click <a href="${trackingUrl}">here</a> to verify your account.</p>`,
    });
    // return response;
  }
}
