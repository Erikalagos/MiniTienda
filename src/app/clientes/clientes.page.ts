import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false,
})
export class ClientesPage implements OnInit {

  // Datos
  clientes: any[] = [];
  clientesFiltrados: any[] = [];

  // Búsqueda
  termino = '';

  // Modal edición
  modalAbierto = false;
  formCliente!: FormGroup;
  clienteSeleccionado: any = null;
  guardando = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.crearFormulario();
    this.loadClientes();
  }

  // === Inicializa form ===
  private crearFormulario() {
    this.formCliente = this.fb.group({
      IdCliente: [{ value: null, disabled: true }],
      Nombre: ['', [Validators.required, Validators.maxLength(100)]],
      Apellido: ['', [Validators.required, Validators.maxLength(100)]],
      Correo: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      Telefono: ['', [Validators.maxLength(30)]],
      Direccion: ['', [Validators.maxLength(255)]],
    });
  }

  // === Obtener clientes ===
  loadClientes() {
    this.apiService.getClientes().subscribe({
      next: (data: any[]) => {
        this.clientes = Array.isArray(data) ? data : [];
        this.clientesFiltrados = [...this.clientes]; // inicial
      },
      error: _ => this.toast('No se pudieron cargar los clientes', 'danger')
    });
  }

  // === Util para búsqueda: normaliza (sin mayúsculas/acentos/espacios extra) ===
  private norm(v: any): string {
    return (v ?? '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')  // quita acentos
      .trim();
  }

  // === Buscar clientes (por Nombre, Apellido, Correo, Telefono) ===
  buscarClientes(ev: any) {
    this.termino = this.norm(ev?.detail?.value || '');
    if (!this.termino) {
      this.clientesFiltrados = [...this.clientes];
      return;
    }

    this.clientesFiltrados = this.clientes.filter(c => {
      const nombre   = this.norm(c.Nombre);
      const apellido = this.norm(c.Apellido);
      const correo   = this.norm(c.Correo);
      const tel      = this.norm(c.Telefono);
      const full     = this.norm(`${c.Nombre} ${c.Apellido}`);
      return (
        nombre.includes(this.termino) ||
        apellido.includes(this.termino) ||
        full.includes(this.termino) ||
        correo.includes(this.termino) ||
        tel.includes(this.termino)
      );
    });
  }

  limpiarBusqueda() {
    this.termino = '';
    this.clientesFiltrados = [...this.clientes];
  }

  // === Abrir modal edición ===
  abrirEditar(cliente: any) {
    this.clienteSeleccionado = { ...cliente };
    this.formCliente.reset({
      IdCliente: cliente.IdCliente,
      Nombre: cliente.Nombre,
      Apellido: cliente.Apellido,
      Correo: cliente.Correo,
      Telefono: cliente.Telefono,
      Direccion: cliente.Direccion
    });
    this.modalAbierto = true;
  }

  // === Cerrar modal ===
  cerrarModal() {
    this.modalAbierto = false;
    this.clienteSeleccionado = null;
  }

  // === Guardar edición ===
  async guardarEdicion() {
    if (!this.clienteSeleccionado) return;
    if (this.formCliente.invalid) {
      this.formCliente.markAllAsTouched();
      return;
    }

    const id = this.clienteSeleccionado.IdCliente;
    const payload = {
      Nombre: this.formCliente.get('Nombre')?.value,
      Apellido: this.formCliente.get('Apellido')?.value,
      Correo: this.formCliente.get('Correo')?.value,
      Telefono: this.formCliente.get('Telefono')?.value,
      Direccion: this.formCliente.get('Direccion')?.value
    };

    this.guardando = true;
    try {
      await firstValueFrom(this.apiService.updateCliente(id, payload));
      // Actualiza en memoria
      const idx = this.clientes.findIndex(c => c.IdCliente === id);
      if (idx > -1) this.clientes[idx] = { ...this.clientes[idx], ...payload };

      // Re-aplica el filtro con el término actual
      this.buscarClientes({ detail: { value: this.termino } });

      this.toast('Cliente actualizado ✅', 'success');
      this.cerrarModal();
    } catch (e) {
      console.error(e);
      this.toast('No se pudo actualizar el cliente', 'danger');
    } finally {
      this.guardando = false;
    }
  }

  // === Eliminar cliente ===
  async eliminarCliente(cliente: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Eliminar a <strong>${cliente.Nombre} ${cliente.Apellido}</strong>?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            try {
              await firstValueFrom(this.apiService.deleteCliente(cliente.IdCliente));
              this.clientes = this.clientes.filter(c => c.IdCliente !== cliente.IdCliente);
              this.buscarClientes({ detail: { value: this.termino } }); // mantiene filtro
              this.toast('Cliente eliminado 🗑️', 'success');
            } catch (e) {
              console.error(e);
              this.toast('No se pudo eliminar', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  private async toast(message: string, color: 'success' | 'danger' | 'primary' = 'primary') {
    const t = await this.toastController.create({ message, duration: 1800, color });
    await t.present();
  }
}
