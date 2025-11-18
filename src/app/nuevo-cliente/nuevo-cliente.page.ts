import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.page.html',
  styleUrls: ['./nuevo-cliente.page.scss'],
  standalone: false,
})
export class NuevoClientePage implements OnInit {
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
      Nombre:   ['', [Validators.required, Validators.maxLength(50)]],
      Apellido: ['', [Validators.required, Validators.maxLength(50)]],
      Correo:   ['', [Validators.email, Validators.maxLength(50)]],
      Telefono: ['', [Validators.maxLength(15)]],
      Direccion:['',  [Validators.maxLength(300)]],
    });
  }

  async submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.guardando = true;
    try {
      await firstValueFrom(this.api.createCliente(this.form.value));
      await this.ok('Cliente creado ✅');
      this.router.navigateByUrl('/clientes');
    } catch (e) {
      console.error(e);
      this.err('No se pudo crear el cliente');
    } finally {
      this.guardando = false;
    }
  }

  private async ok(msg: string)  { (await this.toast.create({ message: msg, color: 'success', duration: 1600 })).present(); }
  private async err(msg: string) { (await this.toast.create({ message: msg, color: 'danger',  duration: 1800 })).present(); }
}
