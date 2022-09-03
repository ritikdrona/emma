import { Router } from 'express'
import { createNode } from './router/createNode'
import { getNodesByParentId } from './router/getNodesByParentId'

const cruxRouter = Router()

cruxRouter.post('/nodes', createNode)
cruxRouter.get('/nodes/:parentId', getNodesByParentId)

export default cruxRouter
