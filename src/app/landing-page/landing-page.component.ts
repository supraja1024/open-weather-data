import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [LandingPageService]
})
export class LandingPageComponent implements OnInit {

  entries: any;
  subscription: any;

  constructor(private landingPageService: LandingPageService, private router: Router) {

    // API Data Subject Subscription
    this.subscription = this.landingPageService.getMessage().subscribe(message => {
      if (message) {
        this.entries = message.list;
      } else {
        // clear messages when empty message received
        this.entries = [];
      }
    });
  }
  ngOnInit() {
    this.landingPageService.getCitiesData();
  }
  // Navigate to Weather details page
  goto(entry: any) {
    this.router.navigate(["/home/detail/" + entry.id]);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }


}
