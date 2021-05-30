import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { CuchillasComponent } from './componentes/cuchillas/cuchillas.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    MenuprincipalComponent,
    CuchillasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
