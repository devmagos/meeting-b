require('dotenv').config()

module.exports = {
    port: process.env.PORT || 6660,
    mongo_db: process.env.MONGO_DB
}