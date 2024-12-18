const sequelize = require("sequelize")
const config = require("./config.json")

const database = new sequelize(
  config.db.name,
  config.db.username,
  config.db.password,
  {
    host : config.db.host,
    dialect : config.db.dialect
  }
)

try{
  database.authenticate()
  console.log(`DataBase Connected : ${config.db.name}`)
} catch (err){
  console.log(err)
}

module.exports = database