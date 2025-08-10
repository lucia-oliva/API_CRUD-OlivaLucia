const express = require("express");
const app = express();
const port = 3000;
const dbconnect = require("./config/db");

//ruta raiz

app.get("/", (req,res) => {
    res.send("Funciona");
});

dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo iniciar el servidor debido a un error en la base de datos');
});
