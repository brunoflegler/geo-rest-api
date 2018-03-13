const jwt = require('jwt-simple'),
      moment = require('moment'),
      config = require('../config/oauth');

const ensureAuthenticated = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  if (!req.header('Authorization')) {
      return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  //revisar isso
  const token = req.header('Authorization');
  const payoad = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  } catch(err) {
    return res.status(401).send({ message: err.message });
  }
  if(payload.exp <= moment().unix)
    return res.status(401).send({ message: 'Token has expired' });
  req.user = payload.sub;
  next();
}

module.exports = ensureAuthenticated;
