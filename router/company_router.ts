import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createCompany, deleteCompany, updateCompany } from '../controllers/business'
import { createProject, deleteProject, patchProject, updateProject } from '../controllers/project'


const router = Router()

//////////////////////////////////////               Project            //////////////////////////////////////


router.post('/project', 
body('project_name').isString(),
body('description').isString(),
body('timeframe').isString(),
body('technology').isString(),
handleInputErrors, createProject)



router.put('/project/:id' , 
body('project_name').isString(),
body('description').isString(),
body('timeframe').isString(),
body('technology').isString(),
handleInputErrors,updateProject)

router.delete('/project/:id' ,deleteProject)



router.post('/company' ,
body('company_name').isString(),
body('location').isString(),
body('industry').isString(),
body('description').isString(),
handleInputErrors, createCompany)



router.put('/company/:id',
body('company_name').isString(),
body('location').isString(),
body('industry').isString(),
body('description').isString(),
handleInputErrors, updateCompany)
router.delete('/company/:id' ,deleteCompany)

export default router
