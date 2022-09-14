import { Document, model, Schema } from 'mongoose'

export interface NodeInterface extends Document {
    text: String
    parentId: Schema.Types.ObjectId
}

const nodeSchema = new Schema({
    text: String,
    parentId: Schema.Types.ObjectId
})

const Node = model<NodeInterface>('Node', nodeSchema)
export default Node
