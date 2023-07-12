import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createCompany, deleteCompany, updateCompany } from '../controllers/business'
import { createProject, deleteProject, patchProject, updateProject } from '../controllers/project'


const comprouter = Router()

//////////////////////////////////////               Project            //////////////////////////////////////


comprouter.post('/project', 
body('project_name').isString(),
body('description').isString(),
body('timeframe').isString(),
body('technology').isString(),
handleInputErrors, createProject)



comprouter.put('/project/:id' , 
body('project_name').isString(),
body('description').isString(),
body('timeframe').isString(),
body('technology').isString(),
handleInputErrors,updateProject)

comprouter.delete('/project/:id' ,deleteProject)



comprouter.post('/company' ,
body('company_name').isString(),
body('location').isString(),
body('industry').isString(),
body('description').isString(),
handleInputErrors, createCompany)



comprouter.put('/company/:id',
body('company_name').isString(),
body('location').isString(),
body('industry').isString(),
body('description').isString(),
handleInputErrors, updateCompany)
comprouter.delete('/company/:id' ,deleteCompany)

export default comprouter
