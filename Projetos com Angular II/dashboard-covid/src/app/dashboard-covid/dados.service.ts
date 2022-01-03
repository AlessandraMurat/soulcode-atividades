import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class DadosService {

  
  readonly dados = [
    ["Julho",  15],   
  ]


  constructor() { }



  obterDados(): Observable<any> {
    return new Observable (observable => {
      observable.next(this.dados);
      observable.complete();
    })
  } 

}