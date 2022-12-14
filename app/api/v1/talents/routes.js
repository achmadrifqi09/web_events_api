const express = require('express')
const router = express.Router()
const { index, find, create, update, destroy } = require('./controller')
const { authenticateUser, authorizationRoles } = require('../../../middleware/auth')

router.get('/talents', authenticateUser, authorizationRoles('organizer'), index)

router.post('/talents', authenticateUser, authorizationRoles('organizer'), create)

router.get('/talents/:id', authenticateUser, authorizationRoles('organizer'), find)

router.put('/talents/:id', authenticateUser, authorizationRoles('organizer'), update)

router.delete('/talents/:id', authenticateUser, authorizationRoles('organizer'), destroy)

module.exports = router
