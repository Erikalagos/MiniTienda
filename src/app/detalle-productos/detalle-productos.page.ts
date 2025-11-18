import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
  standalone: false
})
export class DetalleProductosPage implements OnInit {

  productoId: any;
  producto: any;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id');
    this.cargarProducto();
  }

  cargarProducto() {
    this.http.get(`${environment.apiUrl}/productos/${this.productoId}`)
      .subscribe((data: any) => {
        this.producto = data;
      })
  }

  IrAtras() {
    this.navCtrl.back();
  }
}