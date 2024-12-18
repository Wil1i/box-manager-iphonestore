const User = require("../models/User")
const password = require("../utils/password")

const post = async (req, res) => {
  if(req.body.password != req.body.passwordRepeat) return req.flash("danger", "کلمه عبور با تکرار آن مطابقت ندارد.");

  await User.create({
    username : req.body.username,
    password : await password.encrypt(req.body.password),
    userRank : "admin"
  })

  req.flash("success", "با موفقیت ثبت نام انجام شد.")

  res.redirect("/auth")
}

module.exports = {
  post
}