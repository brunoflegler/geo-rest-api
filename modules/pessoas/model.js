const Sequelize = require('sequelize'),
      sequelize = require('../../config/database');

const Pessoa = sequelize.define('pessoa', {
  id: { type: Sequelize.UUIDV4, primaryKey: true },
  cnh: {  type: Sequelize.STRING },
  cpf: {  type: Sequelize.STRING },
  email: {  type: Sequelize.STRING },
  inativo: {  type: Sequelize.BOOLEAN },
  nome: {  type: Sequelize.STRING },
  telefone: {  type: Sequelize.STRING },
  validade_cnh: {  type: Sequelize.DATE },
  logradouro: {  type: Sequelize.STRING },
  complemento: {  type: Sequelize.STRING },
  bairro: {  type: Sequelize.STRING },
  municipio: {  type: Sequelize.STRING },
  cep: {  type: Sequelize.STRING },
  estado: {  type: Sequelize.STRING },
  rg: {  type: Sequelize.STRING },
  categoria: {  type: Sequelize.STRING },
  nome_fantasia: {  type: Sequelize.STRING },
  inscricao_estadual: {  type: Sequelize.STRING },
  contato: {  type: Sequelize.STRING },
  inscricao_municipal: {  type: Sequelize.STRING },
  observacao: {  type: Sequelize.STRING },
  rfid: {  type: Sequelize.STRING },
  data_nascimento: {  type: Sequelize.DATE },
  telefone_fixo: {  type: Sequelize.STRING }
});

module.exports = Pessoa;
