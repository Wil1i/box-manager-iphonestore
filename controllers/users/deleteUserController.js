const User = require("../../models/User")
const log = require("../../utils/log")

const get = async (req, res) => {
    const findUser = await User.findByPk(req.params.id)

    if(!findUser){
        req.flash("danger", "کاربر مورد نظر یافت نشد.")
        return res.redirect("/users")
    }

    log("حذف کاربر", `کاربر ${findUser.username} حذف شد.`, req.user.id)

    await findUser.destroy()

    req.flash("success", "کاربر مورد نظر با موفقیت حذف شد.")

    res.redirect("/users")
}

module.exports = {
    get
}