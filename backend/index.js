
import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://localhost/BDMENN",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

if(!db){
    console.log("Rayos")
}else{
    console.log("Relax bby")
}



app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send("EUEUEU"))


const gameRoutes = require("./routes/gameRoutes.js");
// const consoleRoutes = require("./routes/consoleRoutes.js");



app.use("/api", gameRoutes);
// app.use("/api", consoleRoutes);



const history = require("connect-history-api-fallback");
app.use(history());

var port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("localhost:",port)
});  