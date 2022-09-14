import { Router } from 'express'
import { validateUser } from '../auth/middlewares/validateUser'
import { createNode } from './routes/createNode'
import { getNodesByParentId } from './routes/getNodesByParentId'

const cruxRouter = Router()

cruxRouter.post('/nodes', validateUser, createNode)
cruxRouter.get('/nodes/:parentId', validateUser, getNodesByParentId)

export default cruxRouter
