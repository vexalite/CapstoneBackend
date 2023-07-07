import { validationResult } from "express-validator"
import { Request, Response, NextFunction } from 'express';

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
     const err = validationResult(req)
     console.log(err)

     if(!err.isEmpty()){
          res.status(400)
          res.json({error:"no name"})
     } else{
          next()
     }

}