import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
  standalone: false,
})
export class NuevoProductoPage implements OnInit {
  form!: FormGroup;
  guardando = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      Nombre: ['', [Validators.required, Validators.maxLength(150)]],
      Precio: [null, [Validators.required, Validators.min(0)]],
      Stock: [0, [Validators.required, Validators.min(0)]],
      IdCategoria: [null, [Validators.required, Validators.min(1)]],
    });
  }

  async submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.guardando = true;
    try {
      await firstValueFrom(this.api.createProducto({
        Nombre: this.form.value.Nombre,
        Precio: Number(this.form.value.Precio),
        Stock: Number(this.form.value.Stock),
        IdCategoria: Number(this.form.value.IdCategoria),
      }));
      await this.ok('Producto creado ✅');
      this.router.navigateByUrl('/productos');
    } catch (e) {
      console.error(e);
      this.err('No se pudo crear el producto');
    } finally {
      this.guardando = false;
    }
  }

  private async ok(msg: string)  { (await this.toast.create({ message: msg, color: 'success', duration: 1600 })).present(); }
  private async err(msg: string) { (await this.toast.create({ message: msg, color: 'danger',  duration: 1800 })).present(); }
}
