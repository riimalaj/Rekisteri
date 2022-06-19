import type {NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../db'

export default async(req: NextApiRequest, res: NextApiResponse)=>{

    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const huoltoData = JSON.parse(req.body)
    
    console.log("PostData contact data: ", huoltoData)
    const savedHuolto = await prisma.huolto.create({
        data: huoltoData
    })
    res.json(savedHuolto)
}

