const isUserLoggedIn = (req, res, next) => {
  if (!req.user) {
    req.flash("warning", "ابتدا به حساب کاربری خود وارد شوید");
    req.session.redirectURL = req.url;
    res.redirect("/auth");
    return;
  }

  next();
};

const isUserNotLoggedIn = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
    return;
  }

  next();
};

const isUserAdmin = (req, res, next) => {
  const accessedRanks = ["admin", "developer"];

  if (!accessedRanks.includes(req.user.rank)) return res.redirect("/");

  next();
};

const isUserDeveloper = (req, res, next) => {
  const accessedRanks = ["developer"];

  if (!accessedRanks.includes(req.user.rank)) return res.redirect("/");

  next();
};

module.exports = {
  isUserLoggedIn,
  isUserNotLoggedIn,
  isUserAdmin,
  isUserDeveloper,
};