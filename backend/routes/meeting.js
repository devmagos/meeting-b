const express = require('express');
const {createMeeting, getMeetings} = require('../controllers/meeting')

const router = express.Router();

router.post('/createMeeting', createMeeting)
router.get('/', getMeetings)

module.exports = router;