import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './components/empresa/crear/crear-empresa/crear-empresa.component';
import { EmpresaComponent } from './components/empresa/listado/empresa.component';

const routes: Routes = [
  { path: '', component: EmpresaComponent },
  { path: 'empresas-transportadoras', component: EmpresaComponent },
  { path: 'crear-empresa', component: CrearEmpresaComponent },
  { path: '**', component: EmpresaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
