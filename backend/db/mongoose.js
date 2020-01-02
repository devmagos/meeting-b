const mongoose = require('mongoose')
const {mongo_db} = require('../config/config');

const connectDB = () => {
    mongoose.connect(mongo_db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, () => console.log('DB CONNECTED'))
}


module.exports = connectDB;