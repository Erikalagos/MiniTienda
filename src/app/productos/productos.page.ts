import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false,
  
})
export class ProductosPage implements OnInit {

  productos: any[] = [];
  productosFiltrados: any[] = [];
  terminoBusqueda = '';

  // Modal + edición
  modalAbierto = false;
  formProducto!: FormGroup;
  productoSeleccionado: any = null;
  guardando = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
      private router: Router ,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.crearFormulario();
    this.cargarProductos();
  }

  private crearFormulario() {
    this.formProducto = this.fb.group({
      IdProducto: [{ value: null, disabled: true }],
      Nombre: ['', [Validators.required, Validators.maxLength(150)]],
      Precio: [0, [Validators.required, Validators.min(0)]],
      Stock: [0, [Validators.required, Validators.min(0)]],
      IdCategoria: [null, [Validators.required, Validators.min(1)]],
    });
  }

  async cargarProductos() {
    const loading = await this.loadingCtrl.create({ message: 'Cargando productos...' });
    await loading.present();
    try {
      const data = await firstValueFrom(this.api.getProductos()); // ✅ sin toPromise()
      this.productos = Array.isArray(data) ? data : [];
      this.productosFiltrados = [...this.productos];
    } catch (e) {
      console.error(e);
      await this.showAlert('Error', 'No se pudieron cargar los productos');
    } finally {
      loading.dismiss();
    }
  }

  buscarProductos(ev: any) {
    this.terminoBusqueda = (ev?.detail?.value || '').toLowerCase().trim();
    if (!this.terminoBusqueda) {
      this.productosFiltrados = [...this.productos];
      return;
    }
    this.productosFiltrados = this.productos.filter(p =>
      (p.Nombre || '').toLowerCase().includes(this.terminoBusqueda) ||
      (p.Categoria || '').toLowerCase().includes(this.terminoBusqueda)
    );
  }

  limpiarBusqueda() {
    this.terminoBusqueda = '';
    this.productosFiltrados = [...this.productos];
  }

  irANuevoProducto() {
  this.router.navigate(['/nuevo-producto']);
}

  // === Botón Editar ===
  abrirEditar(producto: any) {
    this.productoSeleccionado = { ...producto };
    this.formProducto.reset({
      IdProducto: producto.IdProducto,
      Nombre: producto.Nombre,
      Precio: producto.Precio,
      Stock: producto.Stock,
      IdCategoria: producto.IdCategoria ?? null
    });
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.productoSeleccionado = null;
  }

  async guardarEdicion() {
    if (!this.productoSeleccionado) return;
    if (this.formProducto.invalid) {
      this.formProducto.markAllAsTouched();
      return;
    }

    const id = this.productoSeleccionado.IdProducto;
    const payload = {
      Nombre: this.formProducto.get('Nombre')?.value,
      Precio: Number(this.formProducto.get('Precio')?.value),
      Stock: Number(this.formProducto.get('Stock')?.value),
      IdCategoria: Number(this.formProducto.get('IdCategoria')?.value)
    };

    this.guardando = true;
    try {
      await firstValueFrom(this.api.updateProducto(id, payload)); // ✅ sin toPromise()

      // refrescar en memoria
      const idx = this.productos.findIndex(p => p.IdProducto === id);
      if (idx > -1) this.productos[idx] = { ...this.productos[idx], ...payload };
      this.buscarProductos({ detail: { value: this.terminoBusqueda } });

      await this.showAlert('Listo', 'Producto actualizado ✅');
      this.cerrarModal();
    } catch (e) {
      console.error(e);
      await this.showAlert('Error', 'No se pudo actualizar el producto');
    } finally {
      this.guardando = false;
    }
  }

  // === Eliminar ===
  async eliminarProducto(producto: any) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: `¿Eliminar <strong>${producto.Nombre}</strong>?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            try {
              await firstValueFrom(this.api.deleteProducto(producto.IdProducto)); // ✅ sin toPromise()
              this.productos = this.productos.filter(p => p.IdProducto !== producto.IdProducto);
              this.limpiarBusqueda();
              this.showAlert('Listo', 'Producto eliminado 🗑️');
            } catch (e) {
              console.error(e);
              this.showAlert('Error', 'No se pudo eliminar');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Helpers
  private async showAlert(header: string, message: string) {
    const a = await this.alertCtrl.create({ header, message, buttons: ['OK'] });
    await a.present();
  }
}
