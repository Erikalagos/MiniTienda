import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-categorias',
  templateUrl: './detalle-categorias.page.html',
  styleUrls: ['./detalle-categorias.page.scss'],
  standalone: false
})
export class DetalleCategoriasPage implements OnInit {

  categoriaId: any;
  categoria: any;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.categoriaId = this.route.snapshot.paramMap.get('id');
    console.log('Cargando categoría ID:', this.categoriaId); // Para debug
    this.cargarCategoria();
  }

  cargarCategoria() {
    this.loading = true;
    this.error = '';
    
    this.http.get(`${environment.apiUrl}/categorias/${this.categoriaId}`)
      .subscribe({
        next: (data: any) => {
          console.log('Datos recibidos:', data); // Para debug
          this.categoria = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al cargar la categoría:', error);
          this.error = 'Error al cargar la categoría';
          this.loading = false;
        }
      });
  }

  // Función para regresar a la página anterior
  IrAtras() {
    this.navCtrl.back();
  }
}