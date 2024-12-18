const User = require("../../models/User")
const {toPersian} = require("../../utils/convert")
const {toToday} = require("../../utils/date")

const get = async (req, res) => {
    const allUsers = await User.findAll()

    res.render("users/all", {
        user : req.user,
        flash : req.flash(),
        allUsers,
        toPersian,
        toToday
    })
}

module.exports = {
    get
}