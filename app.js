const express = require("express")
const bodyParser = require("body-parser")
const flash = require("connect-flash")
const cookies = require("cookie-parser")
const session = require("express-session")
const fileUpload = require("express-fileupload")
const passport = require("passport")

const config = require("./configs/config.json")

const app = express()

app.use(flash())
app.use(cookies())
app.use(fileUpload())
app.use(session({ secret : config.secret }))
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(passport.initialize())
app.use(passport.session())

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

require("./utils/passport")

const requestsRoutes = require("./routes/requests")
app.use("/requests", requestsRoutes)

const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes)

const indexRoutes = require("./routes/index")
app.use("/", indexRoutes)

app.listen(config.port, () => {
    console.log(`App is running on ${config.port}`)
})