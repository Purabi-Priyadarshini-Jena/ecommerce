const { User } = require('../db/models')


const createUserRepository = async (user) => {
    console.log("Inside createUserRepository")
    return await User.create(user)
}

const findUserByEmailRepository = async (email) => {
    return await User.findOne({ where: { email } })
}

const getUsersRepository = async () => {
    return await User.find()
}

module.exports = {
    createUserRepository,
    getUsersRepository,
    findUserByEmailRepository
}


