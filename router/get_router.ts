import {Router} from 'express'
import { getAscCompanies, getAscDevelopers, getAscProjects, getCompanies, getDescCompanies, getDescDevelopers, getDescProjects, getDevelopers, getProjects } from '../controllers/getall'
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



getrouter.get('/company?name=asc', getAscCompanies)
getrouter.get('/project?name=asc', getAscProjects)
getrouter.get('/dev?name=asc', getAscDevelopers)
getrouter.get('/company?name=desc', getDescCompanies)
getrouter.get('/project?name=desc', getDescProjects)
getrouter.get('/dev?name=desc', getDescDevelopers)
export default getrouter
