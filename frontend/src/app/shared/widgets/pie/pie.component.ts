import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false,
       
      },
      title: {
        text: "Number of Candidates  per years"
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',

          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
     
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
