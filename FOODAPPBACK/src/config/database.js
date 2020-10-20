module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'root',
  password: '1234',
  database: 'delivery_app_db',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
