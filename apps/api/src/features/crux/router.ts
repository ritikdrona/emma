import { Router } from 'express'
import { validateUser } from '../auth/middlewares/validateUser'
import { createNode } from './routes/createNode'
import { getNodesByParentId } from './routes/getNodesByParentId'
import { patchNode } from './routes/patchNode'

const cruxRouter = Router()

cruxRouter.post('/nodes', validateUser, createNode)
cruxRouter.get('/nodes/:parentId', getNodesByParentId)
cruxRouter.patch('/nodes/:id', patchNode)

export default cruxRouter
