const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

exports.login = (req, res) => {
  const {username, password} = req.body

  if(password === process.env.PASSWORD) {
    const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1d'})

    res.json({
      username,
      token
    })
  } else {
    res.status(400).json({
      error: 'Wrong password'
    })
  }
}

exports.requireLogin = expressJWT({
  secret: "CSQF7GBCRf9LQm3A",
  algorithms: ['HS256']
})