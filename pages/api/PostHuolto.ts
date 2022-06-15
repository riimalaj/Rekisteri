import { PrismaClient } from "@prisma/client"
import type {NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const huoltoData = JSON.parse(req.body)
    
    console.log("PostData contact data: ", huoltoData)
    const savedHuolto = await prisma.Maint.create({
        data: huoltoData
    })
    res.json(savedHuolto)
}

