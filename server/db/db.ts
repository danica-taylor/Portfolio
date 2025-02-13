import connection from './connection'

import { Project } from '../../models/project'

const db = connection;

// Get all projects
export function getAllProjects(): Promise<Project[]> {
  return db('projects').select()
}

// Get project by id
export function getProjectById(id: number): Promise<Project> {
  return db('projects').where({ id }).select().first()
}

// Add project
// export function addProject(newProject: Project){
//   return db('projects').insert(newProject)
// }

