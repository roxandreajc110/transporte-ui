import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
interface Persona {
  tipoIdentificacion: string;
  identificacion: string;
  nombre: string;
  direccion: string;
  telefono: string;
  representanteLegal: any;
}

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})

export class CrearEmpresaComponent implements OnInit {

  representantesLegal: any;
  idRepresentanteLegalSeleccionado: any;
  empresaTransportadoraForm: Persona = {
    tipoIdentificacion: "",
    identificacion: "",
    nombre: "",
    direccion: "",
    telefono: "",
    representanteLegal: {
      id: "",
      tipoIdentificacion: "",
      identificacion: "",
      nombre: "",
      direccion: "",
      telefono: "",
    }
  };

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.personaService.obtenerRepresentantesLegal().subscribe(data => {
      console.log(data);
      this.representantesLegal = data;
    })

  }

  crearEmpresa() {
    this.empresaTransportadoraForm.representanteLegal = this.representantesLegal.find((r: any) => r.id == this.idRepresentanteLegalSeleccionado);
    this.personaService.crearEmpresaTransportadora(this.empresaTransportadoraForm).subscribe(data => {
      alert("Creación exitosa");
      setTimeout(() => {
        this.router.navigate(['/empresas-transportadoras']);
      }, 300);
    }, (error) => {
      alert("Problemas en la creación, intentelo nuevamente");
    })
  }

}
