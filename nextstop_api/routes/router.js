import express from 'express'
import { login, profile, register } from '../controller/user/user.js';
import { verifyToken } from '../middleware/authmiddleware.js';
const routes = express.Router()

// routes.use('a/user',user)

routes.post('/register',register)
routes.post('/login',login)
routes.get('/profile',verifyToken,profile)

export default routes