  
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const PlanetSpecies = new Schema(
  {
    planetId: { type: ObjectId, ref: 'Planet' },
    speciesId: { type: ObjectId, ref: 'Species' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSpecies.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

PlanetSpecies.virtual('species', {
  localField: 'speciesId',
  ref: 'Species',
  foreignField: '_id',
  justOne: true
})

export default PlanetSpecies