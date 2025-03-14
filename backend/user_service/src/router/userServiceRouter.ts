import express from 'express'
import { userChangePassword, userLogin, userLogout, userRegistration } from '../controllers/authController'
import { asyncHandler } from '../middleware/asyncHandler'
import { getUserById } from '../controllers/userController'
import { isAuthenticate } from '../middleware/isAuth'



const userServiceRouter = express.Router()

userServiceRouter.post("/register", asyncHandler(userRegistration))
userServiceRouter.post("/login", asyncHandler(userLogin))
userServiceRouter.post("/logout", asyncHandler(userLogout))
userServiceRouter.patch("/changepassword",isAuthenticate, asyncHandler(userChangePassword))
userServiceRouter.get("/getuserbyid:id", isAuthenticate,asyncHandler(getUserById))



export default userServiceRouter