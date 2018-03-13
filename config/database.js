const Sequelize = require('sequelize');

var opts = {
    define: {
        freezeTableName: true,
        timestamps: false
    }
}

const sequelize = new Sequelize('postgres://postgres:PnCdEL@localhost:5432/rastreador_2.0', opts);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
