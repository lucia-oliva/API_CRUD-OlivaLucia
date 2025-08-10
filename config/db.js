const mongoose = require('mongoose');


const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/evento");
        console.log('Conexión a la base de datos establecida');
    } catch (err) {
        console.error('Error en la conexión a la base de datos:', err);
        process.exit(1); 
    }
}

module.exports = dbconnect;