import { model, Schema } from 'mongoose'

const nodeSchema = new Schema({
    text: String,
    parentId: Schema.Types.ObjectId
})

const Node = model('Node', nodeSchema)
export default Node
