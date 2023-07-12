// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const comparePasswords = (password, hash) =>{
 return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
     return bcrypt.hash(password, 5)
}

export const createJWT = (newcompany) =>{
     const token = jwt.sign({
          id: newcompany.id,
          username: newcompany.username
     },
     process.env.C_JWT_SECRET)

     return token
}

//auth middleware
export const comProtect = (req, res, next)=>{
const bearer = req.headers.authorization

if(!bearer){
     res.status(400)
     res.send('get the fuck out bitch 😃')
     return
}
const [, token] = bearer.split(' ')

if (!token){
     res.status(400)
     res.send('unvalid token 😃')
     return
}

try{
     const company = jwt.verify(token, process.env.C_JWT_SECRET)
     req.company = company
     next()
} catch (e){
     console.error(e)
     res.status(400)
     res.send('unvalid token 😃')
     return
}
}
