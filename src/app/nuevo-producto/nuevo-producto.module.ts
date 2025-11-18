import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProductoPage } from './nuevo-producto.page';

const routes: Routes = [{ path: '', component: NuevoProductoPage }];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NuevoProductoPage]
})
export class NuevoProductoPageModule {}
