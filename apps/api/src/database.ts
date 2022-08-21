import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const databaseUrl: string = process.env.MONGODB_URL as string
mongoose.connect(databaseUrl, () => console.log('DB Connected Successfully!'))

export default mongoose
