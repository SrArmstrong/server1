const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');

const app = express();

// Middleware para manejar JSON
app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS

const db = mysql.createConnection({
  host: '69.49.241.56',
  user: 'opticlas_SergioAldavalde',
  password: 'Ares2021$$',
  //password: '',
  database: 'opticlas_digitalmindworks'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Ruta para mostrar usuarios
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error in the server', error: err });
    }

    // Envía la respuesta con los resultados formateados
    res.status(200).json({
      success: true,   // Indica que la operación fue exitosa
      data: result     // Los datos de la tabla `usuarios`
    });
  });
});

const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
