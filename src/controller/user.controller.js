const { createUserService } = require("../service/user.service")

const createUserController = async (req, res) => {
    console.log("Inside createUserController")
    const { name, email, password } = req.body
    const user = { name, email, password, role: 'user' }
    const result = await createUserService(user)
    res.status(201).json({ "message": "User created successfully", result })
}

const getUsersController = (req, res) => {
    res.status(501).json({ "message": "All users" })
}


module.exports = {
    createUserController,
    getUsersController
}

// if i want to use await i need to have the method to be async
// async method always return promise so we need to await for that (await keyword is used)