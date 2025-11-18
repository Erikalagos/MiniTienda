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



git clone https://github.com/Erikalagos/MiniTienda.git
cd MiniTienda
