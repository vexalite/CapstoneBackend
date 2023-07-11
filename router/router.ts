import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'
import { createCompany, deleteCompany, getCompanies, getOneCompany, updateCompany } from '../controllers/business'




const router = Router()

//Products
router.get('/project' , (req, res) => {
     res.json({message:"hey from nodemon"})
})
router.post('/project' , (req,res)=>{
     res.json({message:"project post success"})
     console.log(req.body)
})
router.get('/project/:id' , ()=>{})
router.put('/project/:id' , body('name').isString(),handleInputErrors, (req,res)=>{
   
})
router.delete('/project/:id' , ()=>{})

//Update
router.get('/company' ,getCompanies,(req,res)=>{
     res.json({message:"get done"})
})
router.post('/company' , createCompany, ()=>{})
router.get('/company/:id' ,getOneCompany, ()=>{})
router.put('/company/:id' ,updateCompany, ()=>{})
router.delete('/company/:id' ,deleteCompany, ()=>{})

router.get('/devs' , ()=>{})
router.post('/devs' , ()=>{})
router.get('/devs/:id' , ()=>{})
router.put('/devs/:id' , ()=>{})
router.delete('/devs/:id' , ()=>{})

export default router