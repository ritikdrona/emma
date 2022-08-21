import { Request, Response } from 'express'
import User from './models/User'

export const authenticate = async (req: Request, res: Response) => {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })
    if (user === null) {
        res.status(404).send({ message: 'User not present.', user: null })
    }

    if (user?.password !== password) {
        res.send({ message: 'Username or password incorrect.', user: null })
    }

    res.send({ message: 'Authenticated Successfully!', user: user })
}
