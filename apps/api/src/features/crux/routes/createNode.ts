import { Request, Response } from 'express'
import Node from '../models/Node'

export const createNode = async (req: Request, res: Response) => {
    const node = await Node.create(req.body)
    return res.status(201).send({
        message: 'Node created successfully!',
        node: node
    })
}
