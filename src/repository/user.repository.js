const { User } = require('../db/models')


const createUserRepository = async (user) => {
    console.log("Inside createUserRepository")
    const { name, email, password, role } = user
    return await User.create({ name, email, password, role, createdAt: new Date(), updatedAt: new Date() })
}

const getUsersRepository = async () => {
    return await User.find()
}

module.exports = {
    createUserRepository,
    getUsersRepository
}


