import { Component, OnInit } from '@angular/core';
import {Cabanhas} from '../cabanhas-def/cabanhas';
import {CabanhasService} from '../cabanhas.service';//importamos el service para manejar los datos de las cabanhas
@Component({
  selector: 'app-cabanhas',
  templateUrl: './cabanhas.component.html',
  styleUrls: ['./cabanhas.component.css']
})
export class CabanhasComponent implements OnInit {
  cabanhas:Cabanhas[];
  getCabanhas():void{
    this.CabanhasService.getCabanhas()
    .subscribe(cabanhas=>this.cabanhas=cabanhas);
  }
  constructor(
    private CabanhasService:CabanhasService//injectamos el servicio
    ) { }

  ngOnInit() {
    this.getCabanhas();
  }

}
