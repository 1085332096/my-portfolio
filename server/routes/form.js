// backend/routes/form.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, message } = req.body;
  console.log(`Nombre: ${name}, Mensaje: ${message}`); // Muestra en la consola del servidor
  res.status(200).json({ success: true });
});

module.exports = router;

