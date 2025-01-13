const Request = require("../models/Request")
const log = require("../utils/log")

const get = async (req, res) => {
    res.render("submitBox", {
        user : req.user,
        flash : req.flash(),
    })
}

const post = async (req, res) => {
    const isIMEISubmitted = await Request.findOne({where : {IMEI1 : req.body.IMEI1, IMEI2 : req.body.IMEI2}})

    if(isIMEISubmitted){
        req.flash("err", "جعبه دستگاه مورد نظر ثبت شده")
        return res.redirect("/box")
    }

    await Request.create({
        IMEI1 : req.body.IMEI1,
        IMEI2 : req.body.IMEI2,
        phoneModel : req.body.phoneModel,
        byUser : req.user.id,
        status : "موجود در فروشگاه",
        capacity : req.body.capacity,
        color : req.body.color,
        partNumber : "-"
    })

    log('ثبت جعبه', `جعبه ${req.body.phoneModel} در فروشگاه موجود شد.`, req.user.id)

    req.flash("success", "جعبه مورد نظر با موفقیت ثبت شد")
    res.redirect("/box")
}

module.exports = {
    get,
    post
}