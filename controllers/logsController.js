const Log = require("../models/Log")
const {toPersian} = require("../utils/convert")
const {toToday} = require("../utils/date")

const get = async (req, res) => {
    const logs = await Log.findAll({order : [['id', 'DESC']]})

    res.render("logs", {
        user : req.user,
        flash : req.flash(),
        toToday,
        toPersian,
        logs
    })
}

const post = async (req, res) => {

}

module.exports = {
    get,
    post
}