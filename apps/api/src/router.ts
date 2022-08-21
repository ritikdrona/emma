import { Router } from 'express'
import authRouter from './features/auth/router'
import cruxRouter from './features/crux/router'

const router = Router()

router.get('/', (req, res) => {
    res.send({ message: 'Hello World!' })
})

router.use('/auth', authRouter)
router.use('/crux', cruxRouter)

export default router
