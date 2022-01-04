import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers: any = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  obtenerEmpresasTransportadoras(): Observable<any>{
    return this.http.get('http://localhost:8080/api/empresaTransportadora/', {headers});
  }

  obtenerRepresentantesLegal(): Observable<any>{
    return this.http.get('http://localhost:8080/api/persona/representanteLegal', {headers});
  }

  public crearEmpresaTransportadora(request: Object){
    return this.http.post('http://localhost:8080/api/empresaTransportadora/', request, {headers});
  }

}
