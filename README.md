# 🛍️ MiniTienda - Sistema de Gestión de Productos, Clientes y Pedidos

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
<img width="1918" height="873" alt="productos" src="https://github.com/user-attachments/assets/694bca90-1b05-4758-a7dc-e5dc4f1222a4" />
<img width="1918" height="868" alt="nuevo_producto" src="https://github.com/user-attachments/assets/846dce75-0e65-4339-8494-972fd48b886a" />
<img width="1918" height="881" alt="Nuevo_Cliente" src="https://github.com/user-attachments/assets/458d5dfc-7895-4905-928a-ed058cab8f99" />
<img width="1918" height="875" alt="detalle_producto" src="https://github.com/user-attachments/assets/ef52939e-cf67-4ef2-b4fe-1247cb15abaa" />
<img width="1918" height="872" alt="clientes" src="https://github.com/user-attachments/assets/f4ce94bd-5af3-4926-b0dd-debe648f74f0" />
<img width="1918" height="875" alt="categorias" src="https://github.com/user-attachments/assets/4814866a-3feb-4977-90aa-0fd48f6ec8ca" />


git clone https://github.com/Erikalagos/MiniTienda.git
cd MiniTienda
