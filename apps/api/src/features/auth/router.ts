import { Router } from 'express'
import { authenticate } from './service'

const authRouter = Router()

authRouter.post('/authenticate', authenticate)

export default authRouter
