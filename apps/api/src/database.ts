import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}` +
        `@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    () => console.log('DB Connected Successfully !')
)

export default mongoose
