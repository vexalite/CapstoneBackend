import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { handleInputErrors } from '../utils/middleware'


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
router.get('/company' , ()=>{})
router.post('/company' , ()=>{})
router.get('/company/:id' , ()=>{})
router.put('/company/:id' , ()=>{})
router.delete('/company/:id' , ()=>{})

router.get('/devs' , ()=>{})
router.post('/devs' , ()=>{})
router.get('/devs/:id' , ()=>{})
router.put('/devs/:id' , ()=>{})
router.delete('/devs/:id' , ()=>{})

export default router