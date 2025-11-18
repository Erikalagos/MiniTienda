import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: 'productos', icon: 'cart' },
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Categorías', url: 'categorias', icon: 'cube' },
 { title: 'Nuevo-producto', url: 'nuevo-producto', icon: 'list' },
  { title: 'Nuevo-Cliente', url: 'nuevo-cliente', icon: 'list' },

    //{ title: 'Pedidos', url: 'pedidos', icon: 'clipboard' },
    /*  { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
        { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
        { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
        { title: 'Archived', url: '/folder/archived', icon: 'archive' },
        { title: 'Trash', url: '/folder/trash', icon: 'trash' },
        { title: 'Spam', url: '/folder/spam', icon: 'warning' }, */
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
