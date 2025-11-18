# 🛍️ MiniTienda - Sistema de Gestión de Productos, Clientes y Pedidos
<img width="1918" height="873" alt="productos" src="https://github.com/user-attachments/assets/412718d1-d243-4b6a-928a-85c0168e1f47" />
<img width="1918" height="868" alt="nuevo_producto" src="https://github.com/user-attachments/assets/4ea68fc3-fe4d-4943-af39-c320a2809a88" />
<img width="1918" height="881" alt="Nuevo_Cliente" src="https://github.com/user-attachments/assets/697139c9-cc17-496c-8bde-0c11a95630c8" />
<img width="1918" height="875" alt="detalle_producto" src="https://github.com/user-attachments/assets/f71472b2-0dbd-4ac5-b648-30a824de9557" />
<img width="1918" height="872" alt="clientes" src="https://github.com/user-attachments/assets/7a7d040f-5148-4ccf-9b1d-94af9624db2a" />
<img width="1918" height="875" alt="categorias" src="https://github.com/user-attachments/assets/4acdce1b-32e8-4ff5-aaa1-fd96c4c5a542" />

MiniTienda es una aplicación desarrollada con **Ionic + Angular** que se conecta a una **API REST en Node.js** con base de datos **SQL Server**.  
Permite administrar productos, clientes, categorías y pedidos de una tienda de forma sencilla y visual.

## 🚀 Tecnologías utilizadas

- **Frontend:** Ionic 7 + Angular
- **Backend:** Node.js + Express
- **Base de datos:** SQL Server
- **Estilos:** SCSS + componentes de Ionic

## 🎯 Funcionalidades principales

- 📦 **Gestión de productos**
  - Listado de productos por categoría
  - Búsqueda de productos
  - Crear, editar y eliminar productos
  - Campos: nombre, precio, existencias, fecha de registro, categoría, etc.

- 👥 **Gestión de clientes**
  - Listado de clientes
  - Crear, editar y eliminar clientes
  - Visualización de detalle de cada cliente

- 🧾 **Gestión de pedidos**
  - Registro de pedidos asociados a cliente y producto
  - Detalle de cada pedido

- 🗂️ **Categorías**
  - Listado de categorías
  - Asociación de productos a una categoría

## 🏗️ Arquitectura

- **Ionic/Angular (Frontend)**  
  Consume la API REST y muestra:
  - Productos (`/productos`)
  - Clientes (`/clientes`)
  - Categorías (`/categorias`)
  - Detalles y formularios de creación/edición

- **API Node.js (Backend)**  
  Endpoints principales (ejemplo):
  - `GET /api/productos`
  - `POST /api/productos`
  - `GET /api/clientes`
  - `POST /api/pedidos`
  
- **SQL Server (Base de datos)**  
  Tablas sugeridas:
  - `Productos`
  - `Clientes`
  - `Categorias`
  - `Pedidos`
  - (y sus relaciones)

## ⚙️ Instalación y ejecución

### 1. Clonar repositorio
```bash
git clone https://github.com/Erikalagos/MiniTienda.git
cd MiniTienda












