import { Request, Response } from 'express'
import User from '../models/User'
import { viewUser } from '../utils'

export const authenticate = async (req: Request, res: Response) => {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })
    if (user === null) {
        res.status(404).send({
            message: 'Username or password incorrect.',
            user: null
        })
        return
    }

    if (user?.password !== password) {
        res.status(200).send({
            message: 'Username or password incorrect.',
            user: null
        })
        return
    }

    res.status(200).send({
        message: 'Authenticated Successfully!',
        user: viewUser(user)
    })
}
