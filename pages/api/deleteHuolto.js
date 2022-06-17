import {Huolto} from '../huolto/index'
import { prisma } from '../db'


export default async({query:{id}}, res)=>{                  
    //res.status(200).json({name: "hello"})  
    /*
    const filtered = Huolto.filter(huolto => {
        huolto.id === id
    })
    */
     
    console.log("Tuhottava id:", id)
    const delRec = await prisma.Huolto.delete({
            where: {
                id: Number(id),
            },
            })
        
        console.log(`Deleting record ${delRec}`)
        res.json({
            succcess: true,    
            message: `Record ${id} deleted`,
        })        
}
    
    
    

