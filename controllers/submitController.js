const Request = require("../models/Request")
const sms = require("../utils/sms")
const config = require("../configs/config.json")
const log = require("../utils/log")

const get = async (req, res) => {
    res.render("submit", {
        user : req.user,
        flash : req.flash(),
    })
}

const post = async (req, res) => {

    const isIMEISubmitted = await Request.findOne({where : {IMEI1 : req.body.IMEI1, IMEI2 : req.body.IMEI2}})

    if(isIMEISubmitted){
        req.flash("err", "دستگاه مورد نظر تکراری است.")
        return res.redirect("/submit")
    }

    await Request.create({
        customerNumber : req.body.customerNumber,
        customerName : req.body.customerName,
        IMEI1 : req.body.IMEI1,
        IMEI2 : req.body.IMEI2,
        phoneModel : req.body.phoneModel,
        byUser : req.user.id,
        status : "ناموجود در فروشگاه",
        capacity : req.body.capacity,
        partNumber : req.body.partNumber,
        color : req.body.color
    })

    sms.send(config.smsCodes.submitBoxRequest, req.body.customerNumber, [req.body.customerName, req.body.phoneModel])
    log('ثبت درخواست جعبه', `درخواست جعبه ${req.body.phoneModel} برای ${req.body.customerName} با شماره ${req.body.customerNumber} ثبت شد.`, req.user.id)

    req.flash("success", "درخواست با موفقیت ثبت شد.")
    res.redirect("/submit")
}

module.exports = {
    get,
    post
}