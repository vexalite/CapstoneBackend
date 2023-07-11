import bodyParser from 'body-parser'
import express from 'express'
import router from '../router/router'
import { protect } from '../utils/auth'
import { createNewUser, signin } from '../controllers/user'
import { createNewCompany, signinCompany } from '../controllers/company'


const app = express()
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',protect, router)
//User routes
app.post('/user/signup', createNewUser)
app.post('/user/signin', signin)
//Company routes
app.post('/company/signup', createNewCompany)
app.post('/company/signin', signinCompany)


app.get('/', (req, res) =>{
     console.log('hello from server')
     res.status(200)
     res.json({message:'holla 😃'})
     console.log(req.body)
})
app.post('/', (req, res) =>{
     console.log(req.body)
     res.json({message:'post done'})
})

export default app;