import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

@NgModule({
  imports: [
    CommonModule,
    MapasRoutingModule
  ],
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadorComponent,
    ZoomRangeComponent,
    PropiedadesComponent
  ]
})
export class MapasModule { }