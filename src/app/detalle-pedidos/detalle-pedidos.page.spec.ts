import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePedidosPage } from './detalle-pedidos.page';

describe('DetallePedidosPage', () => {
  let component: DetallePedidosPage;
  let fixture: ComponentFixture<DetallePedidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
