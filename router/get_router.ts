import {Router} from 'express'
import { getCompanies, getDevelopers, getProjects } from '../controllers/getall'
import { getOneProject } from '../controllers/project'
import { getOneDeveloper } from '../controllers/developer'
import { getOneCompany } from '../controllers/business'

const router = Router()
router.get('/project' , getProjects)
router.get('/dev' ,getDevelopers)
router.get('/company' ,getCompanies,(req,res)=>{
     res.json({message:"get done"})
})
router.get('/project/:id' ,getOneProject)
router.get('/dev/:id' ,getOneDeveloper)
router.get('/company/:id' ,getOneCompany)
export default router
