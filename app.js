require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());

app.get('/', (req, res)=>{
   res.send("Holas se dice weibss")
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
   console.log(' http://localhost:'+ port) ;
});

dbConnect()