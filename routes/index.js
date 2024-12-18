let {Router} = require("express")
const { isUserLoggedIn, isUserNotLoggedIn } = require("../middlewares/auth")
Router = new Router()

const searchController = require("../controllers/searchController")
Router.get("/search", isUserLoggedIn, searchController.get)
Router.post("/search", isUserLoggedIn, searchController.post)

const submitBoxController = require("../controllers/submitBoxController")
Router.get("/box", isUserLoggedIn, submitBoxController.get)
Router.post("/box", isUserLoggedIn, submitBoxController.post)

const loginController = require("../controllers/loginController")
Router.get("/auth", isUserNotLoggedIn, loginController.get)
Router.post("/auth", isUserNotLoggedIn, loginController.post, loginController.func)
Router.get("/logout", isUserLoggedIn, loginController.logout)

const submitController = require("../controllers/submitController")
Router.get("/submit", isUserLoggedIn, submitController.get)
Router.post("/submit", isUserLoggedIn, submitController.post)

const logsController = require("../controllers/logsController")
Router.get("/logs", isUserLoggedIn, logsController.get)

const registerController = require("../controllers/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const homeController = require("../controllers/homeController")
Router.get("/", isUserLoggedIn, homeController.get)

module.exports = Router