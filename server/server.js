const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

// Import Route
const blogRoute = require('./routes/blog')

require('dotenv').config()

const app = express()

// Connect DB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: false
}).then(() => {
  console.log("Connect db successfully");
}).catch((err) => {
  console.log(err)
})

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// Route
app.use('/api', blogRoute)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Start server in port: ${ port }`)
})