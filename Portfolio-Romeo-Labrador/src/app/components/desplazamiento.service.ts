import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {

  @Output() Ejecutar0: EventEmitter<any> = new EventEmitter();

  @Output() Ejecutar1: EventEmitter<any> = new EventEmitter();

  @Output() Ejecutar2: EventEmitter<any> = new EventEmitter();

  @Output() Borrar: EventEmitter<any> = new EventEmitter();

  @Output() Guardar: EventEmitter<any> = new EventEmitter();

  @Output() Agregar: EventEmitter<any> = new EventEmitter();

  @Output() LoginSuccess: EventEmitter<any> = new EventEmitter();

  constructor() { }

  show:number = 0;

}
