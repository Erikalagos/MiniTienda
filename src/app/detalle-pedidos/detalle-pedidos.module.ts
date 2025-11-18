import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePedidosPageRoutingModule } from './detalle-pedidos-routing.module';

import { DetallePedidosPage } from './detalle-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePedidosPageRoutingModule
  ],
  declarations: [DetallePedidosPage]
})
export class DetallePedidosPageModule {}
