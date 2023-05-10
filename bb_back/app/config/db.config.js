module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1234",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

/* 
max: max number of connection in pool
min: min number of connection in pool
idle: mx time (in ms) that connection can be ilde for before releasing it
acquire: max time (in ms) that pool willi try to get connection before throwing error
*/