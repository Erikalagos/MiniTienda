import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegacion
import { ApiService } from '../services/api.service'; // Importar ApiService para las peticiones HTTP
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: false
})
export class PedidosPage implements OnInit {

  pedidos: any[] = [];

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient,
    private alertController: AlertController, private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadPedidos();
  }

  // Funcion para obtener los Pedidos
  loadPedidos() {
    this.apiService.getPedidos().subscribe((data: any[]) => {
      this.pedidos = data;
    })
  }

}
