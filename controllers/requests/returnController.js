const Request = require("../../models/Request")
const log = require("../../utils/log")

const post = async (req, res) => {
    const findRequest = await Request.findByPk(req.params.id)

    if(!findRequest){
        req.flash("danger", "درخواست مورد نظر یافت نشد.")
        return res.redirect("/requests")
    }

    await findRequest.update({
        status : "موجود در فروشگاه",
        customerNumber : null,
        customerName : null,
        byUser : req.user.id,
    })

    req.flash("success", "جعبه مورد نظر با موفقیت به فروشگاه بازگشت")
    log("بازگشت جعبه", `جعبه با شماره درخواست ${findRequest.id} به فروشگاه بازگشت`, req.user.id)

    res.redirect(`/requests/${req.params.id}`)
}

module.exports = {
    post
}