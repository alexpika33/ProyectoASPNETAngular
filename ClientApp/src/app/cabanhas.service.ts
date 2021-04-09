import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {CABANHAS} from './cabanhas-def/cabanhas';//importamos el array 
import {Cabanhas} from './cabanhas-def/cabanhas';//importamos la clase
/*importamos estas ultimas dos cosas por que el manejo de datos tiene que hacerse
desde un servicio no desde el componente*/
@Injectable({
  providedIn: 'root'
})
export class CabanhasService {
  //metodo para devolver todas las cabanhas 
  getCabanhas():Observable<Cabanhas[]>{
    const cabs=of(CABANHAS);
    return cabs;
  }
  /* En el seguiente metodo la intencion es buscar una cabaña en especifico
  para devolversela a otro metodo que le restaria 1 al atributo de cantidadDisponible
  ya que gracias a este atributo vamos a decidir si se deja reservar o no en la pagina
  ya sea ocultando el boton y mostrando un mensaje o haciendo que no se pueda pulsar el boton
  
  getCab(nome:string):Cabanhas{
    if(!nome.trim()){
      return ;
    }
    const cabs=this.getCabanhas();
    cabs.get<Cabanhas>(nome);
  }
  */
  constructor() { }
}
