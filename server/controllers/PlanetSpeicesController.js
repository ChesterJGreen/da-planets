import { planetSpeciesService } from '../services/PlanetSpeciesService'
import BaseController from '../utils/BaseController'

export class PlanetSpeciesController extends BaseController {
  constructor() {
    super('api/planetSpecies')
    this.router
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async create(req, res, next) {
    try {
      const planetSpecies = await planetSpeciesService.create(req.body)
      res.send(planetSpecies)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const planetSpecies = await planetSpeciesService.edit(req.body)
      res.send(planetSpecies)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await planetSpeciesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
