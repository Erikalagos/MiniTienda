import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  // Metodo para obtener todos los Productos
  getProductos() {
    return this.http.get<any[]>(this.apiUrl + '/productos');
  }

  getProductosById(id: string) {
    return this.http.get(`${this.apiUrl}/productos/${id}`);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/productos/${id}`);
  }

  // Metodo para obtener todos los Clientes
  getClientes() {
    return this.http.get<any[]>(this.apiUrl + '/clientes');
  }

  getClientesById(id: string) {
    return this.http.get(`${this.apiUrl}/clientes/${id}`);
  }

  // Metodo para obtener todos las Categorias
  getCategorias() {
    return this.http.get<any[]>(this.apiUrl + '/categorias');
  }

  getCategoriasById(id: string) {
    return this.http.get(`${this.apiUrl}/categorias/${id}`);
  }

  // Metodo para obtener todos las Pedidos
  getPedidos() {
    return this.http.get<any[]>(this.apiUrl + '/pedidos');
  }

  getPedidosById(id: string) {
    return this.http.get(`${this.apiUrl}/pedidos/${id}`);
  }


    // ======= Clientes =======


  updateCliente(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/clientes/${id}`, data);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clientes/${id}`);
  }
// agrega/actualiza estos métodos:
createProducto(data: {
  Nombre: string; Precio: number; Stock: number; IdCategoria: number;
}) {
  return this.http.post<any>(`${this.apiUrl}/productos`, data);
}

createCliente(data: {
  Nombre: string; Apellido: string; Correo?: string; Telefono?: string; Direccion?: string;
}) {
  return this.http.post<any>(`${this.apiUrl}/clientes`, data);
}


  updateProducto(id: number, payload: { Nombre: string; Precio: number; Stock: number; IdCategoria: number; }): Observable<any> {
    return this.http.put(`${this.apiUrl}/productos/${id}`, payload);
  }



}





