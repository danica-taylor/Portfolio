import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

// GET api/v1/projects

router.get('/', async (req, res) => {
  try {
    const projects = await db.getAllProjects()
    res.json(projects)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// GET api/v1/projects/:id

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const project = await db.getProjectById(id)
    res.json(project)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
