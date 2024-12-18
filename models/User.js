const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const User = db.define("users", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey: true
  },

  username : {
    type : DataTypes.TEXT
  },

  password : {
    type : DataTypes.TEXT
  },

  userRank : {
    type : DataTypes.TEXT
  }
})

User.sync()

module.exports = User