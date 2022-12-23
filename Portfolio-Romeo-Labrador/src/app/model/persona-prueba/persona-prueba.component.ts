import { Component, OnInit } from '@angular/core';
import { persona } from '../persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-persona-prueba',
  templateUrl: './persona-prueba.component.html',
  styleUrls: ['./persona-prueba.component.css']
})
export class PersonaPruebaComponent implements OnInit {
  persona:persona = new persona("","","");

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data =>{
      this.persona = data;
    })
  }

}
