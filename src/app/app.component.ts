import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user;
  
  constructor(private appService: AppService) { }

  ngOnInit() {
     this.appService.getToggles()
      .then((user) => this.user = user);
  }

  executeAction() {
    this.appService.getToggles()
      .then((user) => this.user = user);
  }

}
