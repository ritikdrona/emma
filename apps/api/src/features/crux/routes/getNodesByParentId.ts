import { Request, Response } from 'express'
import Node from '../models/Node'

export const getNodesByParentId = async (req: Request, res: Response) => {
    const parentId: String | null =
        req.params.parentId === 'null' ? null : req.params.parentId

    const nodes = await Node.find({
        parentId: parentId
    })

    res.send({ message: 'Fetched nodes', nodes: nodes })
}
