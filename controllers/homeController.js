const convert = require("../utils/convert")
const Request = require("../models/Request")
const {toPersian} = require("../utils/convert")
const {toToday} = require("../utils/date")

const get = async (req, res) => {
  const requests = await Request.findAll({order : [['id', 'DESC']]})

  res.render("homePage", {
    convert,
    requests,
    toPersian,
    header : undefined,
    toToday,
    user : req.user
  })
}

const post = (req, res) => {

}

module.exports = {
  get,
  post
}