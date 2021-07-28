
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, require: true },
    starId: { type: ObjectId, ref: 'Star' },
    galaxyId: { type: ObjectId, ref: 'Galaxy' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet
