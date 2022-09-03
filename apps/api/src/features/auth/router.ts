import { Router } from 'express'
import { authenticate } from './routes/authenticate'
import { createUser } from './routes/createUser'

const authRouter = Router()

authRouter.post('/authenticate', authenticate)
// authRouter.post('/users', createUser)

export default authRouter
