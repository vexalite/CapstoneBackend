import bodyParser from 'body-parser'
import express from 'express'
import router from '../router/router'
import { protect } from '../utils/auth'
import { createNewUser, signin } from '../controllers/user'


const app = express()
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',protect, router)
app.post('/user', createNewUser)
app.post('/signin', signin)



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