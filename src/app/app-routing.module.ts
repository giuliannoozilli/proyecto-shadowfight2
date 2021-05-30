import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CuchillasComponent } from './componentes/cuchillas/cuchillas.component';




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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
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

  <a mat-list-item routerlink="rutasai">Sai</a>
  <a mat-list-item routerlink="rutabatac">Batons Acero</a>
  <a mat-list-item routerlink="rutaespnin">Espada Ninja</a>
  <a mat-list-item routerlink="rutamach">Machetes</a>
  <a mat-list-item routerlink="rutadag">Dagas</a>
  <a mat-list-item routerlink="rutasegsan">Segadora Sangrante</a>
*/
