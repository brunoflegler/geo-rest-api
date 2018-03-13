const Sequelize = require('sequelize'),
  sequelize = require('../../config/database'),
  Pessoa = require('../pessoas/model');

const Usuario = sequelize.define('usuario', {
  id: { type: Sequelize.STRING, primaryKey: true },
  senha: { type: Sequelize.STRING },
  //   timezone: { type: Sequelize.INTEGER },
  //   tipo: { type: Sequelize.STRING },
  //   inativo: { type: Sequelize.BOOLEAN },
  //   recebe_email: { type: Sequelize.BOOLEAN },
    pessoa_id: { type: Sequelize.STRING, references: {
      model: Pessoa,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }}
});

Usuario.belongsTo(Pessoa, { as: 'pessoa', foreignKey: 'pessoa_id' });

module.exports = Usuario;
