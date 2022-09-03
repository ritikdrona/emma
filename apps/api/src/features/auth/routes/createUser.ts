import { Request, Response } from 'express'
import User from '../models/User'
import { viewUser } from '../utils'

export const createUser = async (req: Request, res: Response) => {
    const user = await User.create(req.body)
    res.status(201).send({
        message: 'User created successfully!',
        user: viewUser(user)
    })
}
