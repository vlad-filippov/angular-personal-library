import { Component } from '@angular/core';
import { MochDataService } from '../../services/moch-data.service';
import { ChartOptions, ChartType } from 'chart.js';
import { CommonAnimations } from '../../../../shared/animations/common.animations';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.scss'],
  animations: [CommonAnimations.slideActiveBackground],
})
export class Admin1Component {
  public selectedMenuItem: number = 0;
  public selectedSidebarItem: number = 0;
  public toggleNightMode: boolean;
  public selectedChartBarDataId: number = 1;

  // Bar Chart ---------------
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  // Pie  -----------
  public polarAreaChartLabels: any = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: any = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // Radar
  public radarChartOptions: any = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  // Line
  public lineChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: any = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // Some 1

  public bubbleChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: any[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  constructor(
    public mochDataService: MochDataService,
  ) {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public changeBerChartData(id: number): void {
    this.selectedChartBarDataId = id;

    switch (id) {
      case 1:
        this.barChartData = [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ];
        break;

      case 2:
        this.barChartData = [
          { data: [70, 69, 10, 21, 36, 75, 10], label: 'Series A' },
          { data: [18, 58, 20, 89, 46, 77, 30], label: 'Series B' },
        ];
        break;

      case 3:
        this.barChartData = [
          { data: [5, 29, 20, 61, 16, 25, 70], label: 'Series A' },
          { data: [68, 8, 10, 9, 66, 27, 10], label: 'Series B' },
        ];
        break;

      case 4:
        this.barChartData = [
          { data: [10, 99, 20, 51, 16, 25, 60], label: 'Series A' },
          { data: [18, 28, 20, 19, 26, 17, 10], label: 'Series B' },
        ];
        break;
    }
  }
}
