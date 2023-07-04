import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { BarChartDataset } from 'src/app/core/types/bar-chart-dataset.type';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  public chart: any;
  @Input() chartId: string = Math.random().toString();
  @Input() labels: string[] = []
  @Input() datasets: BarChartDataset[] = []
  @Input() chartTitle: string = '';
  @Input() displayTitle: boolean = true;

  ngAfterViewInit(): void {
    this.createChart();
  }


  createChart(){
    this.chart = new Chart(this.chartId, {
      type: 'bar',
      data: {
        labels: this.labels,
	       datasets: this.datasets
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: this.displayTitle,
            text: this.chartTitle
          }
        }
      }
    });
  }

}
