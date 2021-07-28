
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetSpeciesService {
  async getAll(query = {}) {
    return await dbContext.PlanetSpecies.find(query)
  }

  async getById(id) {
    const planetSpecies = await dbContext.PlanetSpecies.findById(id)
    if (!planetSpecies) {
      throw new BadRequest('Invalid Id')
    }
    return planetSpecies
  }

  async create(body) {
    return await dbContext.PlanetSpecies.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const planetSpecies = await dbContext.PlanetSpecies.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return planetSpecies
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.PlanetSpecies.findByIdAndDelete(id)
  }
}

export const planetSpeciesService = new PlanetSpeciesService()
