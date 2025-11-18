import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCategoriasPage } from './detalle-categorias.page';

describe('DetalleCategoriasPage', () => {
  let component: DetalleCategoriasPage;
  let fixture: ComponentFixture<DetalleCategoriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
