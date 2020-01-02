const Meeting = require('../db/models/Meeting')

const MeetingController = {
    async createMeeting(req, res) {
        try {
            const {name, subject, location, userFrom, userTo} = req.body;
            const createMeeting = await new Meeting({
                name, subject, location, userFrom, userTo
            })
            createMeeting.save()

            res.status(201).json({
                status: 201,
                message: 'Meeting created successfully',
                data: createMeeting
            })
        } catch(error) {
            console.log(error.message)
        }
    },

    async getMeetings(req, res) {
        try {
            const allMeetings = await Meeting.find({})

            res.status(200).json({
                status: 200,
                message: 'All Meetings',
                data: allMeetings
            })
        } catch(error) {
            console.log(error.message)
        }
    }
}

module.exports = MeetingController