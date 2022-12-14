const express = require('express')
const router = express.Router()
const {
    signup,
    activation,
    getEvents,
    getEventById,
    singin,
    getOrder,
    checkout,
    invoice,
} = require('./controller')
const { authenticateParticipant } = require('../../../middleware/auth')

router.post('/participants/signup', signup)

router.post('/participants/signin', singin)

router.put('/activate', activation)

router.get('/events', getEvents)

router.get('/events/:id', getEventById)

router.get('/orders', authenticateParticipant, getOrder)

router.post('/checkout', authenticateParticipant, checkout)

router.get('/invoice/:id', authenticateParticipant, invoice)

module.exports = router
