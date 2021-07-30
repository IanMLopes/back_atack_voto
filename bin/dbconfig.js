
const oracledb = require('oracledb')
require('dotenv').config()



const tasy1Config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionString:`${process.env.DB_HOST}/${process.env.DB_SERVICE}`,
  poolMin: 5,
  poolMax: 10,
  poolPingInterval: 10,
  autoCommit: true
}

const poolPromiseOracleTasy = oracledb.createPool(tasy1Config)
  .then((pool) => {
    console.log('Connected to Oracle (Tasy DB)')
    return pool
  })
  .catch((err) => {
    console.log('Oracle Connection', err)
    return
  })

  module.exports = poolPromiseOracleTasy