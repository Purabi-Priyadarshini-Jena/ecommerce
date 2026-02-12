const { createUserRepository, getUsersRepository, findUserByEmailRepository, findUserByIdService } = require('../repository/user.repository')

const createUserService = async (user) => {
    const userExists = await findUserByEmailRepository(user.email)
    if (userExists) {
        return "User already exists"
    }
    return await createUserRepository(user)
}

const getUsersService = async () => {
    return await getUsersRepository()
}

const getUserByIdService = async (id) => {
    const user = await findUserByIdService(id)
    if (!user) {
        return "User doesn't exists"
    }
    return user
}

module.exports = {
    createUserService,
    getUsersService,
    getUserByIdService
}