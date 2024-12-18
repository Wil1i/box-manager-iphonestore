let {Router} = require("express")
const {isUserLoggedIn} = require("../middlewares/auth")
Router = new Router()

const newUserController = require("../controllers/users/newUserController")
Router.get("/new", isUserLoggedIn, newUserController.get)
Router.post("/new", isUserLoggedIn, newUserController.post)

const deleteUserController = require("../controllers/users/deleteUserController")
Router.get("/:id/delete", isUserLoggedIn, deleteUserController.get)

const singleUserController = require("../controllers/users/singleUserController")
Router.get("/:id", isUserLoggedIn, singleUserController.get)
Router.post("/:id", isUserLoggedIn, singleUserController.post)

const allUsersController = require("../controllers/users/allUsersController")
Router.get("/", isUserLoggedIn, allUsersController.get)

module.exports = Router