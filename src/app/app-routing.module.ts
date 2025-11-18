import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'detalle-productos/:id',
    loadChildren: () => import('./detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'detalle-clientes/:id',
    loadChildren: () => import('./detalle-clientes/detalle-clientes.module').then( m => m.DetalleClientesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'detalle-categorias/:id',
    loadChildren: () => import('./detalle-categorias/detalle-categorias.module').then( m => m.DetalleCategoriasPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'detalle-pedidos/:id',
    loadChildren: () => import('./detalle-pedidos/detalle-pedidos.module').then( m => m.DetallePedidosPageModule)
  },
  {
    path: 'nuevo-producto',
    loadChildren: () => import('./nuevo-producto/nuevo-producto.module').then( m => m.NuevoProductoPageModule)
  },

  {
    path: 'nuevo-cliente',
    loadChildren: () => import('./nuevo-cliente/nuevo-cliente.module').then( m => m.NuevoClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
