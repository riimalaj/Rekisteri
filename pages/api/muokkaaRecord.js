import {Huolto} from '../Huolto/index'
import { prisma } from '../db'


export default async(req, res)=>{                  
   console.log("Parameter ", req);
   const id = req.body
   
    console.log("Haetaan recordia id:", Number(id));
    const rec = await prisma.Huolto.findOne({
            where: {
                id: Number(id)
            }
            });
        
    console.log('Recordi ', rec + " haettu");
    res.json({
        succcess: true,    
        message: `Recordi ${id} haettu`,
    });     
}
    
    
    

