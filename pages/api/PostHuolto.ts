import { PrismaClient } from "@prisma/client"
import type {NextApiRequest, NextApiResponse } from "next"


export default async(req: NextApiRequest, res: NextApiResponse)=>{

    let prisma = null;
    if (!prisma){
        prisma = new PrismaClient()      
    

    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const huoltoData = JSON.parse(req.body)
    
    console.log("PostData contact data: ", huoltoData)
    const savedHuolto = await prisma.Huolto.create({
        data: huoltoData
    })
    res.json(savedHuolto)
}
}
