import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const databaseUrl: string = process.env.MONGO_URL as string
mongoose.connect(databaseUrl, (error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log('DB Connected Successfully!')
    }
})
