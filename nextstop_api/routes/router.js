import express from 'express'
const routes = express.Router()

import user, { login, register } from './user/user.js';routes.use('p/user',user)

routes.post('/register',register)
routes.post('/login',login)

export default routes