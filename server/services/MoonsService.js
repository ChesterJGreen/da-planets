// import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonsService {
  async getAll(query = {}) {
    return await dbContext.Moons.find(query)
  }

  async getById(id) {
    const moon = await dbContext.Moons.findById(id)
    if (!moon) {
      throw new BadRequest('Invalid Id')
    }
    return moon
  }

  async create(body) {
    return await dbContext.Moons.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const moon = await dbContext.Moons.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return moon
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Moons.findByIdAndDelete(id)
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

export const moonsService = new MoonsService()
