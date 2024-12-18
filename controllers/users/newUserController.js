const User = require("../../models/User")
const password = require("../../utils/password")
const log = require("../../utils/log")

const get = async (req, res) => {
    res.render("users/new", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    const isUsernameUsed = await User.findOne({where : {username : req.body.username}})

    if(isUsernameUsed){
        req.flash("err", "نام کاربری وارد شده قبلا استفاده شده.")
        return res.redirect("/users/new")
    }

    await User.create({
        username : req.body.username,
        password : await password.encrypt(req.body.password),
        userRank : req.body.userRank
    })

    req.flash("success", "کاربر مورد نظر با موفقیت ساخته شد.")
    log("ساخت کاربر", `کاربر ${req.body.username} توسط ${req.user.username} ساخته شد.`, req.user.id)
    res.redirect("/users")
}

module.exports = {
    get,
    post
}