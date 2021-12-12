const jwt = require('jsonwebtoken')

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