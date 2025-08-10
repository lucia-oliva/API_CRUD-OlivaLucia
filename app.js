//Alumna: Oliva Ana Lucia
const express = require("express");
const app = express();
const dbconnect = require("./config/db");
const eventosRoutes = require("./routes/eventosRoutes");

app.use(express.json());
app.use(eventosRoutes);
app.use('/api', eventosRoutes);
//ruta raiz
app.get("/", (req,res) => {
    res.send("Funciona");
});

dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo iniciar el servidor debido a un error en la base de datos', err);
});
