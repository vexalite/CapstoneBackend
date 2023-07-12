import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const comparePasswords = (password, hash) =>{
 return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
     return bcrypt.hash(password, 6)
}


export const createJWT_C = (newcompany) =>{
    //  console.log(newcompany.id, newcompany.username)
     const token_c = jwt.sign({
          id: newcompany.id,
          // username: newcompany.username
     },
     process.env.JWT_SECRET)
    //  console.log('Generated JWT:', token_c);
    
     return token_c
}

// console.log(createJWT_C)
//auth middleware
export const comProtect = (req, res, next)=>{
const bearer = req.headers.authorization
// console.log(req.headers.authorization)

if(!bearer){
     res.status(400)
     res.send('get the fuck out bitch 😃')
     return
}
const [, token_c] = bearer.split(' ')

if (!token_c){
     res.status(400)
     res.send('unvalid token 😃')
     return;
}

try{
     const company = jwt.verify(token_c, process.env.JWT_SECRET)
     req.company = company
    //  console.log('try',com)
     next()
} catch (e){
     // console.error(e)
    //  console.log(token_c)
     res.status(400)
     res.send('unvalid token 😃')
     return
}
}