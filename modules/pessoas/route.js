var express = require('express'),
    router = express.Router(),
    Pessoa = require('./model'),
    ensureAuthenticated = require('../../functions/ensureAuthenticated');

router.get('/', ensureAuthenticated, (req, res) => {
  Pessoa.findAll().then((pessoas) => {
    res.send(pessoas);
  });
});

router.get('/:id', ensureAuthenticated, (req, res) => {
  Pessoa.find({ where: { id: req.params.id }}).then((pessoa) => {
    res.send(pessoa);
  });
});

module.exports = router;
