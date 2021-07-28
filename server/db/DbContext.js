// import ValueSchema from '../models/Value'
import GalaxySchema from '../models/Galaxy'
import mongoose from 'mongoose'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
