import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
/*
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CuchillasComponent } from './componentes/armasacto1/cuchillas/cuchillas.component';
import { NudillosComponent } from './componentes/armasacto1/nudillos/nudillos.component';
import { SaiComponent } from './componentes/armasacto1/sai/sai.component';
import { BatonsaceroComponent } from './componentes/armasacto1/batonsacero/batonsacero.component';
import { EspadaninjaComponent } from './componentes/armasacto1/espadaninja/espadaninja.component';
import { MachetesComponent } from './componentes/armasacto1/machetes/machetes.component';
import { DagasComponent } from './componentes/armasacto1/dagas/dagas.component';
import { SegadorasangranteComponent } from './componentes/armasacto1/segadorasangrante/segadorasangrante.component';
*/
const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
