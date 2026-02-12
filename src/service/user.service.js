const { createUserRepository, getUsersRepository } = require('../repository/user.repository')

const createUserService = async (user) => {
    console.log("Inside createUserService")
    return await createUserRepository(user)
}

const getUsersService = async () => {
    console.log("Inside getUsersService")
    return await getUsersRepository()
}

module.exports = {
    createUserService,
    getUsersService
}