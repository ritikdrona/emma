import dotenv from 'dotenv'
import express from 'express'
import router from './router'

dotenv.config()

const app = express()
app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})
