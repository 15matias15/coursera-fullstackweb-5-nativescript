import { Component, OnInit } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as Email from 'nativescript-email';
import * as TNSPhone from 'nativescript-phone';

@Component({
  selector: 'app-contact',
  moduleId: module.id,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private fonticon: TNSFontIconService) {}

  ngOnInit() {}

  sendEmail() {
    Email.available().then((avail: boolean) => {
      if (avail) {
        Email.compose({
          to: ['confusion@food.net'],
          subject: '[ConFusion]: Query',
          body: 'Dear Sir/Madam:'
        });
      } else console.log('No Email Configured');
    });
  }

  callRestaurant() {
    TNSPhone.requestCallPermission()
      .then(() => TNSPhone.dial('+56985964901', false))
      .catch(() => TNSPhone.dial('+56985964901', true));
  }
}
