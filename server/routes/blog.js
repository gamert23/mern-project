const express = require('express')
const router = express.Router()

// Import Controller
const { create } = require('../controllers/blogController')

router.post('/create', create)

module.exports = router