import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: false,
})
export class CategoriasPage implements OnInit {
  categorias: Array<{ IdCategoria: number; Nombre: string; Descripcion: string }> = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadCategorias();
  }

  loadCategorias() {
    this.api.getCategorias().subscribe({
      next: (data: any[]) => {
        // Normaliza posibles nombres de campos desde el backend
        this.categorias = (Array.isArray(data) ? data : []).map((c: any) => ({
          IdCategoria: Number(c.IdCategoria),
          Nombre: (c.Nombre ?? c.Categoria ?? '').toString(),
          Descripcion: (c.Descripcion ?? c.Detalle ?? c.descripcion ?? '').toString(),
        }));
      },
      error: () => {
        this.categorias = [];
      }
    });
  }
}
