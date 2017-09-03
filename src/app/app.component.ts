import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toggles;
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.toggles = this.appService.getToggles();
  }

  executeAction() {
    this.toggles = this.appService.getToggles();
  }

}
