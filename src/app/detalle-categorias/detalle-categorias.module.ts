import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCategoriasPageRoutingModule } from './detalle-categorias-routing.module';

import { DetalleCategoriasPage } from './detalle-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCategoriasPageRoutingModule
  ],
  declarations: [DetalleCategoriasPage]
})
export class DetalleCategoriasPageModule {}
