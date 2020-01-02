const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const route = require('./routes');
const connectDB = require('mongoose')

const app = express();
connectDB.connect('mongodb+srv://Admin:jmBQL48mV9DaMiwR@meeting-0euhy.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },  (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB connected');
    }
});

const {port} = config

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(route)

app.listen(port, () => console.log('server running'))
