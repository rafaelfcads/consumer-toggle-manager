import { Injectable } from '@angular/core';

import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Injectable()
export class ChartpieService {

    private chart: AmChart;

    constructor(private AmCharts: AmChartsService) {}

    teste(texto): string {
        return texto;
    }

    create(chartId: string, title: string, dataProvider: string): AmChart {

        this.chart = this.AmCharts.makeChart(chartId, {
            'type': 'pie',
            'angle': 12,
            'balloonText': `[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>`,
            'depth3D': 15,
            'innerRadius': '40%',
            'baseColor': '#C83838',
            'titleField': 'title',
            'valueField': 'valor',
            'theme': 'chalk',
            'allLabels': [],
            'balloon': {},
            'legend': {
              'enabled': true,
              'align': 'center',
              'markerType': 'circle'
            },
            'titles': [{
              'id': 'Title-1',
              'text': title
            }],
            'dataProvider': dataProvider
          });

          return this.chart;
    }

    destroy(): void {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}