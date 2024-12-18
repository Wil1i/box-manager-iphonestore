const Log = require("../models/Log")
const User = require("../models/User")

const log = async (title, description, user) => {
    const findUser = await User.findByPk(user)

    if(!findUser) return 'No users found';

    await Log.create({title, description, user : `(${user}) ${findUser.username}`})

    return true
}

module.exports = log