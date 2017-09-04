import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user = { toggles: []};
  
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  executeAction(token) {
    this.appService.getToggles(token)
      .then((user) => this.user = user);
  }

}
