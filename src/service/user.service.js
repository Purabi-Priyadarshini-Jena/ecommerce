const { createUserRepository, getUsersRepository, findUserByEmailRepository } = require('../repository/user.repository')

const createUserService = async (user) => {
    console.log("Inside createUserService")
    const userExists = await findUserByEmailRepository(user.email)
    if(userExists){
        return "User already exists"
    }
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