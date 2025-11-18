import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePedidosPage } from './detalle-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePedidosPageRoutingModule {}
