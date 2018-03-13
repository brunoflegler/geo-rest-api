var express = require('express'),
  router = express.Router(),
  User = require('../usuarios/model'),
  jwt = require('jwt-simple'),
  moment = require('moment'),
  config = require('../../config/oauth'),
  md5 = require('md5'),
  randomstring = require('randomstring'),
  Pessoa = require('../pessoas/model');

function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  }
  return jwt.encode(payload, config.TOKEN_SECRET);
}


//Método de login
router.post('/auth/login', (req, res) => {
 var querySearch = { 'cpf': req.body.cpf }
  User.find({include: [{model: Pessoa, as: 'pessoa', where: querySearch}] }).then((user) => {
    const password = md5(req.body.senha);
    if (password === user.senha)
      res.send({ token: createJWT(user) });
    else {
      res.status(401);
      res.end();
    }
  })
})


//Método pra resetar a senha
router.post('/password', (req, res) => {
  var querySearch = { 'apelido': req.body.apelido };
  User.find({ where: querySearch }).then((user) => {
    user.getPessoa().then((pessoa) => {
      if (pessoa.cpf_cnpj == req.body.cpf) {
        const password = randomstring.generate(8);
        user.updateAttributes({
          senha: md5(password)
        }).then(() => {
          res.send(password);
        })
      } else
        res.send({ message: 'CPF não confere.' });
    });
  })
})

module.exports = router;
