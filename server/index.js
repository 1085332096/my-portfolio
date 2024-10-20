const express = require('express');
const app = express();
const port = 3000;

// Importa las rutas
const formRoutes = require('./routes/form');

// Middleware para parsear JSON
app.use(express.json());

// Usa las rutas
app.use('/api/form', formRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
