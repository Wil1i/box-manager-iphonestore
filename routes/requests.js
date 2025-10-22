let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const doneController = require("../controllers/requests/doneController")
Router.get("/:id/done", isUserLoggedIn, doneController.get)
Router.post("/:id/done", isUserLoggedIn, doneController.post)

const blockController = require("../controllers/requests/blockController")
Router.post("/:id/block", isUserLoggedIn, blockController.post)

const returnController = require("../controllers/requests/returnController")
Router.post("/:id/return", isUserLoggedIn, returnController.post)

const singleController = require("../controllers/requests/singleController")
Router.get("/:id", isUserLoggedIn, singleController.get)

const allControllers = require("../controllers/requests/allController")
Router.get("/", isUserLoggedIn, allControllers.get)

module.exports = Router