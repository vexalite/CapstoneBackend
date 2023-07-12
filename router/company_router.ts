import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createCompany, deleteCompany, getOneCompany, updateCompany } from '../controllers/business'


const comprouter = Router()



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
