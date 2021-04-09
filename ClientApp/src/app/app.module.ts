import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import * as echarts from 'echarts';//importamos os modulos de echarts e ngxEcharts para as graficas
import {NgxEchartsModule} from 'ngx-echarts';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GraficaComponent } from './grafica/grafica.component';
import { CabanhasComponent } from './cabanhas/cabanhas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,             
    GraficaComponent, CabanhasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgxEchartsModule.forRoot({ // inicializamos os modulos de echarts para as graficas
      echarts
    }),
    FormsModule,
    RouterModule.forRoot([ //especifiamos las rutas a seguir que se usan en el componente <router-outlet>
      { path: '', component: HomeComponent, pathMatch: 'full' }, // por defecto lleva siempre a home
      { path: 'cabanhas', component: CabanhasComponent },
      
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
