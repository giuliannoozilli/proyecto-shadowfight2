import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CuchillasComponent } from './componentes/armasacto1/cuchillas/cuchillas.component';
import { NudillosComponent } from './componentes/armasacto1/nudillos/nudillos.component';
import { SaiComponent } from './componentes/armasacto1/sai/sai.component';
import { BatonsaceroComponent } from './componentes/armasacto1/batonsacero/batonsacero.component';
import { EspadaninjaComponent } from './componentes/armasacto1/espadaninja/espadaninja.component';
import { MachetesComponent } from './componentes/armasacto1/machetes/machetes.component';
import { DagasComponent } from './componentes/armasacto1/dagas/dagas.component';
import { SegadorasangranteComponent } from './componentes/armasacto1/segadorasangrante/segadorasangrante.component';

import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    CuchillasComponent,
    NudillosComponent,
    SaiComponent,
    BatonsaceroComponent,
    EspadaninjaComponent,
    MachetesComponent,
    DagasComponent,
    SegadorasangranteComponent,
    MenuprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
