const express = require('express')
const { getUsersController, createUserController, getUserByIdController } = require('../../controller/user.controller')
const userRouter = express.Router()

userRouter.get('/', getUsersController)
userRouter.post('/', createUserController)
userRouter.get('/:id', getUserByIdController)


module.exports = userRouter