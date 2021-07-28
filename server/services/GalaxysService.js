// import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxysService {
  async getAll(query = {}) {
    return await dbContext.Galaxys.find(query)
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxys.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid Id')
    }
    return galaxy
  }

  async create(body) {
    return await dbContext.Galaxys.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const galaxy = await dbContext.Galaxys.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return galaxy
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Galaxys.findByIdAndDelete(id)
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
}

export const galaxysService = new GalaxysService()
