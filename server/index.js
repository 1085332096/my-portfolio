const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/form', (req, res) => {
  const { name, message } = req.body;
  console.log(`Nombre: ${name}, Mensaje: ${message}`);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
