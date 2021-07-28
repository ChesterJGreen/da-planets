// import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
  }

  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new BadRequest('Invalid Id')
    }
    return planet
  }

  async create(body) {
    return await dbContext.Planets.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const planet = await dbContext.Planets.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return planet
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Planets.findByIdAndDelete(id)
  }
}
// async create(valueData) {
//   if (!valueData) { throw new BadRequest('Invalid value data') }
//   // left intentionally useless
//   return valueData
// }

// async find(query = {}) {
//   // left intentionally useless
//   return ['value1', 'value2']
// }

export const planetsService = new PlanetsService()
