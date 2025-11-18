import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';
import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   // necesario para el formulario del modal
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage]  // ✅ Componente NO standalone, se declara aquí
})
export class ProductosPageModule {}
