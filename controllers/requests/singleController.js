const Request = require("../../models/Request")
const {toPersian} = require("../../utils/convert")

const get = async (req, res) => {
    const findRequet = await Request.findByPk(req.params.id)
    if(!findRequet){
        req.flash("err", "انتقال مورد نظر یافت نشد.")
        return res.redirect("/requests")
    }

    res.render("requests/single", {
        user : req.user,
        flash : req.flash(),
        request : findRequet,
        toPersian
    })
}

const post = async (req, res) => {

}

module.exports = {
    get,
    post
}