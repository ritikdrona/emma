import { Router } from 'express'
import { validateSpecialAccessToken } from './middlewares/validateSpecialAccessToken'
import { authenticate } from './routes/authenticate'
import { createFirstUser } from './routes/createFirstUser'

const authRouter = Router()

authRouter.post('/authenticate', authenticate)
authRouter.post('/users/first', validateSpecialAccessToken, createFirstUser)

export default authRouter
