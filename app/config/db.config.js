module.exports = {
  HOST: "localhost",
  USER: "anurag",
  PASSWORD: "12345",
  DB: "servifydb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
