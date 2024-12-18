const User = require("../models/User")
const passport = require("passport")
const log = require("../utils/log")

const get = async (req, res) => {
  const users = await User.findAll();

  (users[0]) 
    ? res.render("login")
    : res.render("register")
}

const post = passport.authenticate("local", {
  failureRedirect: "/auth",
  failureFlash: true,
  session: true,
});

const func = (req, res) => {
  var redirectTo = req.session.redirectURL || "/";
  res.redirect(redirectTo);
};

const logout = (req, res) => {
  log("Logout", `کاربر از سیستم خارج شد.`, req.user.id)
  req.logout(err => {
      res.redirect("/auth")
  })
}

module.exports = {
  get,
  post,
  func,
  logout
}