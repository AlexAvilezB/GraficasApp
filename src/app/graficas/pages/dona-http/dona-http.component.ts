import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    // this.graficaService
    //   .getUsuariosRedes()
    //   .subscribe((data) => {
    //     console.log(data);
    //     const labels = Object.keys( data );
    //     const values = Object.values(data);
    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{ data: Object.values(data) }],
    //     };
    //   });

    this.graficaService.getUsuariosRedesData().subscribe( ({labels, values}) => {
      this.doughnutChartData = {
        labels: labels,
        datasets: [{ data: values }],
      };
  }
    )
  }

  public doughnutChartLabels: string[] = [
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: []
      }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
