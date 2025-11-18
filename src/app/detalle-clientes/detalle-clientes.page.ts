import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-clientes',
  templateUrl: './detalle-clientes.page.html',
  styleUrls: ['./detalle-clientes.page.scss'],
  standalone: false
})
export class DetalleClientesPage implements OnInit {

  clienteId: any;
  cliente: any;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    this.cargarCliente();
  }

  cargarCliente() {
    this.http.get(`${environment.apiUrl}/clientes/${this.clienteId}`)
      .subscribe((data: any) => {
        this.cliente = data;
      })
  }

  IrAtras() {
    this.navCtrl.back();
  }
}