// import ValueSchema from '../models/Value'
import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetsSchema from '../models/Planet'
import MoonSchema from '../models/Moon'
import mongoose from 'mongoose'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Moons = mongoose.model('Moon', MoonSchema)
  Planets = mongoose.model('Planet', PlanetsSchema)
  Stars = mongoose.model('Star', StarSchema)
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
