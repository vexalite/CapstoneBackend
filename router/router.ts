import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createDeveloper, deleteDeveloper, getOneDeveloper, updateDeveloper } from '../controllers/developer'
import { createProject, deleteProject, getOneProject, patchProject, updateProject } from '../controllers/project'


const router = Router()

router.patch('/project/:id' ,
body('devlist').isString(),
handleInputErrors,patchProject)

///////////////////////////////////////////        Business             //////////////////////////////////



///////////////////////////////////////         Developer Routes            ///////////////////////////

router.post('/dev' ,
body('dev_name').isString(),
body('skills').isArray(),
body('bio').isString(),
body('background').isString(),
body('portfolio_link').optional(),
body('address').optional(),
body('phone').optional(),
body('email').optional(),
handleInputErrors,createDeveloper)

router.put('/dev/:id' ,
body('dev_name').isString(),
body('skills').isString(),
body('bio').isString(),
body('background').isString(),
body('portfolio_link').optional(),
body('address').optional(),
body('phone').optional(),
body('email').optional(),
handleInputErrors,updateDeveloper)

router.delete('/dev/:id' ,deleteDeveloper)
// router.patch('/dev/:id' ,updateDev, ()=>{})

export default router
