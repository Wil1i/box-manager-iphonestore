const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Log = db.define("logs", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    title : {
        type : DataTypes.TEXT
    },

    description : {
        type : DataTypes.TEXT
    },

    user : {
        type : DataTypes.TEXT
    }
})

Log.sync()

module.exports = Log