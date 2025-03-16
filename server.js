const express = require("express");
const app = express();

let users = [
    {
        id: 1,
        user: 'juan'
    },
    {
        id: 2,
        user: 'Agustin'
    }
];

app.get('/', ( req, res ) => {
    res.send('<h1>Servidor con express</h1>');
});

app.get('/api/users', ( req, res ) => {
    res.json(users);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`EL servidor se ejecuta en el puerto ${PORT}`);
})