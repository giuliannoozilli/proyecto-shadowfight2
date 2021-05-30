import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CuchillasComponent } from './componentes/cuchillas/cuchillas.component';
import { NudillosComponent } from './componentes/nudillos/nudillos.component';
import { SaiComponent } from './componentes/sai/sai.component';
import { BatonsaceroComponent } from './componentes/batonsacero/batonsacero.component';
import { EspadaninjaComponent } from './componentes/espadaninja/espadaninja.component';
import { MachetesComponent } from './componentes/machetes/machetes.component';
import { DagasComponent } from './componentes/dagas/dagas.component';
import { SegadorasangranteComponent } from './componentes/segadorasangrante/segadorasangrante.component';



const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'galeria', component: GaleriaComponent
  },
  {
    path: 'rutacuch', component: CuchillasComponent
  },
  {
    path: 'rutanud', component: NudillosComponent
  },
  {
    path: 'rutasai', component: SaiComponent
  },
  {
    path: 'rutabatac', component: BatonsaceroComponent
  },
  {
    path: 'rutaespnin', component: EspadaninjaComponent
  },
  {
    path: 'rutamach', component: MachetesComponent
  },
  {
    path: 'rutadag', component: DagasComponent
  },
  {
    path: 'rutasegsan', component: SegadorasangranteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
