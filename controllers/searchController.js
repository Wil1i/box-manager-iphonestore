const Request = require("../models/Request")
const {toPersian} = require("../utils/convert")
const {toToday} = require("../utils/date")

const get = async (req, res) => {
    res.render("search", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    let findBox = await Request.findAll()

    console.log(req.body.IMEI1)

    findBox = findBox.filter(box => box.IMEI1.endsWith(req.body.IMEI1))

    console.log(findBox)

    res.render("homePage", {requests : findBox, toPersian, toToday, user : req.user, header : "استعلام جعبه"})
}

module.exports = {
    get,
    post
}