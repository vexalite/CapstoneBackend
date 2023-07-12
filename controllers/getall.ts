import prisma from "../prisma/db"

//get all
export const getCompanies = async (req, res) => {
     try {
       const companies = await prisma.business.findMany({
         where: {
           present: true // Include the related Present data
         }
       });
   
       res.json({ data: companies })
     } catch (error) {
       console.error('Error:', error);
       res.status(500).json({ error: 'Internal server error' });
     }
   };

   export const getDevelopers = async(req,res) =>{
     const company = await prisma.developer.findMany({
         where:{
              counter:true
         }
     })
     res.json({data: company,})
    }

    export const getProjects = async(req,res) =>{
     const project = await prisma.project.findMany({
         where:{
              counter: true
         }
     })
     res.json({data: project,})
    }
