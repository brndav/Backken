require('dotenv').config();

const app = require('./app/app')
const port = process.env.PORT || 300;

app.listen(port,()=>{
    console.log('Servidor corriendo en puerto 3006');
});





