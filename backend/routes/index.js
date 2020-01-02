const express = require('express');
const meeting = require('./meeting')

const router = express.Router();

router.use('/meeting', meeting)

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to API'
    })
})

router.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Route not found'
    })
})

module.exports = router;