// import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }

  async getById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!star) {
      throw new BadRequest('Invalid Id')
    }
    return star
  }

  async create(body) {
    return await dbContext.Stars.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const star = await dbContext.Stars.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return star
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Stars.findByIdAndDelete(id)
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

export const starsService = new StarsService()
