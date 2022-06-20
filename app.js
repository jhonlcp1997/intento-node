require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

app.get('/', (req, res)=>{
   res.send("Holas se dice weibss")
});

const port = process.env.PORT || 3001;

/* 
* Aqui invocamos las rutas
*/
app.use('/api', require('./routes'))

app.listen(port, () => {
   console.log(' http://localhost:'+ port) ;
});

dbConnect() //*ejecutamos la funcion que conecta a la base de datos