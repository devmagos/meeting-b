const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MeetingSchema = new Schema({
    name: String,
    subject: String,
    location: String,
    userFrom: String,
    userTo: String,
})

const Meeting = mongoose.model('Meeting', MeetingSchema)

module.exports = Meeting