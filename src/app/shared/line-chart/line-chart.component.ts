import { Component, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto'
import { LineChartDataset } from 'src/app/core/types/line-chart-dataset.type';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  public chart: any;
  @Input() chartId: string = Math.random().toString();
  @Input() chartTitle: string = '';
  @Input() displayTitle: boolean = true;
  @Input() labels: string[] = []
  @Input() datasets: LineChartDataset[] = []

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges):void{
    if(!changes['datasets'].firstChange){
      this.chart.destroy();
      this.createChart();
    }
  }


  private createChart(){
    this.chart = new Chart(this.chartId, {
      type: 'line',
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
