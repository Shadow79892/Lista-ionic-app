import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
   const lista1 = new Lista('Cagar');
   const lista2 = new Lista('Comer');


   this.listas.push(lista1,lista2);
  }
}
