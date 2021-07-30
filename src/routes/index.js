const express = require('express')
const Router = express.Router()
const instituteController = require('../controllers/instituteController')
const voteController = require('../controllers/voteController')

Router.get('/institute',instituteController.getInstitutes)
Router.get('/institute/:seq_institute',instituteController.getInstitute)
Router.post('/institute/vote',voteController.inputVote)
Router.get('/thanks',voteController.getThanks)
Router.get('/thanks/:id',voteController.getThanksById)

module.exports = Router