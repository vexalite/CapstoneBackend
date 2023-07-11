import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createCompany, deleteCompany, getCompanies, getOneCompany, updateCompany } from '../controllers/business'
import { createDeveloper, deleteDeveloper, getDevelopers, getOneDeveloper, updateDeveloper } from '../controllers/developer'
import { createProject, deleteProject, getOneProject, getProjects, updateProject } from '../controllers/project'




const router = Router()

//////////////////////////////////////               Project            //////////////////////////////////////
router.get('/project' , getProjects, (req, res) => {
     res.json({message:"hey from nodemon"})
})
router.post('/project' , createProject,(req,res)=>{
     res.json({message:"project post success"})
     console.log(req.body)
})
router.get('/project/:id' ,getOneProject, ()=>{})
router.put('/project/:id' , body('name').isString(),updateProject, (req,res)=>{
   
})
router.delete('/project/:id' ,deleteProject, ()=>{})

///////////////////////////////////////////          Update                //////////////////////////////////
router.get('/company' ,getCompanies,(req,res)=>{
     res.json({message:"get done"})
})
router.post('/company' , createCompany, ()=>{})
router.get('/company/:id' ,getOneCompany, ()=>{})
router.put('/company/:id' ,updateCompany, ()=>{})
router.delete('/company/:id' ,deleteCompany, ()=>{})


///////////////////////////////////////         Developer Routes            ///////////////////////////
router.get('/dev' ,getDevelopers, ()=>{})
router.post('/dev' ,createDeveloper, ()=>{})
router.get('/dev/:id' ,getOneDeveloper, ()=>{})
router.put('/dev/:id' ,updateDeveloper, ()=>{})
router.delete('/dev/:id' ,deleteDeveloper, ()=>{})
// router.patch('/dev/:id' ,updateDev, ()=>{})

export default router