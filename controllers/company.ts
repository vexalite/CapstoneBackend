
import prisma from "../prisma/db";
import { comparePasswords, createJWT, hashPassword } from "../utils/auth";

export const createNewCompany = async (req, res) => {
     // console.log("----------",req.body);
     if (!req.body.password) {
          return res.status(400).json({ error: "Missing password field" });
        }

     const hashed = await hashPassword(req.body.password);
   

     const company = await prisma.company.findFirst({
          where: {
            username: req.body.username,
          },
        });
        
        if (!company) {
          const newCompany = await prisma.company.create({
            data: {
              username: req.body.username,
              password: hashed,
            },
          });
        
          const token = createJWT(newCompany);
          res.json({ token });
        } else {
          res.json({ message: "User already exists" });
        }

}
//      const createuser = await prisma.user.findFirst({
//            where:{
//                username: req.body.username
//            }
//      });
//      console.log(createuser)
//      if(!createuser === req.body.username){
//           const user = prisma.user.create({
//                data: {
//                     name:req.body.name,
//                    username: req.body.username,
//                    password: hashed,
//                  },
//           })
//           const token = createJWT(user);
//           res.json({ token });
//      }else{
//           res.json({message: "user already exists"})
//      }
     
//    };





export const signinCompany = async(req,res) =>{
   
     const company = await prisma.company.findFirst({
          where:{
               username: req.body.username
          }
     })
     if(!company){
          res.status(401)
          res.json({message:"wrong username"})
          return
     }

     const isValid = await comparePasswords(req.body.password, company.password)
    
          if (!isValid){
               
               res.json({message:'wrong password'})
               return
          }

          const token = createJWT(company)
          res.json({token})
       
}