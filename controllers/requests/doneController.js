const Request = require("../../models/Request")
const sms = require("../../utils/sms")
const config = require("../../configs/config.json")
const log = require("../../utils/log")


const get = async (req, res) => {
    res.render("requests/done", {
        user : req.user,
        flash : req.flash(),
        id : req.params.id
    })
}

const post = async (req, res) => {
    const findRequest = await Request.findByPk(req.params.id)

    if(!findRequest) {
        req.flash("danger", "درخواست مورد نظر یافت نشد.")
        return res.redirect("/requests")
    }

    if(findRequest.status == "ناموجود در فروشگاه"){

        await findRequest.update({
            status : "موجود در فروشگاه"
        })
    
        sms.send(config.smsCodes.boxDelivered, findRequest.customerNumber, [findRequest.customerName, findRequest.phoneModel])
        log("موجود در فروشگاه", `جعبه ${findRequest.IMEI1} به فروشگاه رسید.`, req.user.id)

    }else if(findRequest.status == "موجود در فروشگاه"){

        await findRequest.update({
            status : "تحویل داده شد",
            customerName : req.body.name,
            customerNumber : req.body.number
        })
    
        sms.send(config.smsCodes.boxOut, req.body.number, [req.body.name, findRequest.phoneModel])
        log("تحویل جعبه", `جعبه سریال ${findRequest.IMEI1} به ${findRequest.customerName} تحویل شد`, req.user.id)

    }
    res.redirect(`/requests/${req.params.id}`)
}

module.exports = {
    get,
    post
}