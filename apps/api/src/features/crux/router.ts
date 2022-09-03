import { Router } from 'express'
import { createNode } from './routes/createNode'
import { getNodesByParentId } from './routes/getNodesByParentId'

const cruxRouter = Router()

cruxRouter.post('/nodes', createNode)
cruxRouter.get('/nodes/:parentId', getNodesByParentId)

export default cruxRouter
