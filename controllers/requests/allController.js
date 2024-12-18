const Request = require("../../models/Request")
const {toPersian} = require("../../utils/convert")
const {toToday} = require("../../utils/date")

const get = async (req, res) => {
    const requests = await Request.findAll({order : [['id', 'DESC']]})

    res.render("requests/all", {
        user : req.user,
        flash : req.flash(),
        requests,
        toPersian,
        toToday
    })
}

module.exports = {
    get,
}