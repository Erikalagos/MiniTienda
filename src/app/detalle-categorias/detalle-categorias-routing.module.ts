import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCategoriasPage } from './detalle-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCategoriasPageRoutingModule {}
