import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresasTransportadoras: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerEmpresasTransportadoras().subscribe(data => {
      console.log(data);
      this.empresasTransportadoras = data;
  })
  }

}
