import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// Configurar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Para leer JSON en las peticiones

// Importar rutas
import miembrosRoutes from './routes/miembros.router.js'; 

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Inicio del API de Avengers!');
});

// Usar las rutas
app.use('/miembros', miembrosRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en: http://localhost:${PORT}`);
});
