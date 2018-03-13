var express = require('express'),
    router = express.Router(),
    Usuario = require('./model'),
    Pessoa = require('../pessoas/model'),
    ensureAuthenticated = require('../../functions/ensureAuthenticated');

router.get('/', ensureAuthenticated, (req, res) => {
  Usuario.findAll().then((usuarios) => {
    res.send(usuarios);
  });

});

router.get('/:id', ensureAuthenticated, (req, res) => {
  Usuario.find({ where: { id: req.params.id }}).then((usuario) => {
    usuario.getPessoa().then((pessoa) =>{
      usuario.pessoa_id = pessoa;
      res.send(usuario);
    });
  });
});

module.exports = router;
