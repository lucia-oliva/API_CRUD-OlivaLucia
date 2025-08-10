# API de Eventos

## Estructura del proyecto
api-crud-evento/
│
├── config/
│ └── db.js # Conexión a MongoDB
│
├── models/
│ └── eventosmodel.js # Modelo de Evento
│
├── routes/
│ └── eventosRoutes.js # Rutas de eventos
│
├── app.js # Servidor principal
├── package.json


## Endpoints

### 1. Registrar participante
**POST** `/api/eventos/:id/registrar`  
**GET** /api/eventos/disponibles
**GET** /api/eventos/fecha/YYYY-MM-DD
