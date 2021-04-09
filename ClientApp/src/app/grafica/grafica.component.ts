import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  ejemploChartOptions: any;

  setOptions() {
    this.ejemploChartOptions = {
      title:{
        text:"Titulo básico",
        link:"https:localhost:4200",
        textStyle:{
          color:"rgba(1,1,1)",
        },
        textAling:"auto",
        backgroundColor:"rgba(12,342,213)",
        borderColor:"rgba(4,32,1)",
        borderWidth:"3"
      },
      legend:{},
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
  }
  constructor() {
    this.setOptions();
  }

  ngOnInit() {}
}
