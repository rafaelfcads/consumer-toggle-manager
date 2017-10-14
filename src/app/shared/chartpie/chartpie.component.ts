import { Component, OnInit, Input, Output } from '@angular/core';

import { ChartpieService } from './chartpie.service';

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css'],
  providers: [ChartpieService]
})
export class ChartpieComponent implements OnInit {

  @Input() dataProvider: string;
  @Input() title: string;
  private chartId: string = Math.random().toString();

  constructor(private chartpieService: ChartpieService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.chartpieService.create(this.chartId, this.title, this.dataProvider);
  }

  ngOnDestroy() {
      this.chartpieService.destroy();
  }

}
