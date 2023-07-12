import {Router} from 'express'
import { getCompanies, getDevelopers, getProjects } from '../controllers/getall'
import { getOneProject } from '../controllers/project'
import { getOneDeveloper } from '../controllers/developer'
import { getOneCompany } from '../controllers/business'

const getrouter = Router()
getrouter.get('/project' , getProjects)
getrouter.get('/dev' ,getDevelopers)
getrouter.get('/company' ,getCompanies,(req,res)=>{
     res.json({message:"get done"})
})
getrouter.get('/project/:id' ,getOneProject)
getrouter.get('/dev/:id' ,getOneDeveloper)
getrouter.get('/company/:id' ,getOneCompany)
export default getrouter
