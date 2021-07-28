// import { assignmentsService } from '../services/AssignmentsService'
import { galaxysService } from '../services/GalaxysService'
// import { starsService } from '../services/StarsService'
// import { subjectsService } from '../services/SubjectsService'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      // .get('/:id/assignments', this.getAssignmentsByStudentId)
      // .get('/:id/subjects', this.getSubjectsByStudentId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const galaxy = await galaxysService.getAll(req.query)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxysService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  // async getAssignmentsByGalaxyId(req, res, next) {
  //   try {
  //     const assignments = await assignmentsService.getAll({ studentId: req.params.id })
  //     res.send(assignments)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async getSubjectsByStudentId(req, res, next) {
  //   try {
  //     const subjects = await subjectsService.getAllByStudent(req.params.id)
  //     res.send(subjects)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const galaxy = await galaxysService.edit(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const galaxy = await galaxysService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}