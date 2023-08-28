import { Request, Response } from 'express'
import Node from '../models/Node'

export const patchNode = async (req: Request, res: Response) => {
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    const node = await Node.updateOne({ id }, { $set: req.body })

    if (node.matchedCount === 0) {
        return res.status(404).send({
            message: 'Node not found!',
            node: null
        })
    }

    return res.status(200).send({
        message: 'Node updated successfully!',
        modifiedCount: node.modifiedCount
    })
}
