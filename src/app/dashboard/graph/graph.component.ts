import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from '../../../../node_modules/chart.js';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() {
    Chart.register (...registerables);
  }

  ngOnInit(): void {

    new Chart("chart-one", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'My First Dataset',
            data: [40, 55, 56, 59, 65, 80, 81],
            fill: false,
            borderColor: 'rgb(199, 21, 133)',
            tension: 0.1
          }]
      }
    });

    new Chart("chart-two", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
      }
    });

  }

}
