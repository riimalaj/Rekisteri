import { PrismaClient } from "@prisma/client"
import type {NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const contactData = JSON.parse(req.body)
    
    console.log("PostData contact data: ", contactData)
    const savedContact = await prisma.Playlist.create({
        data: contactData
    })
    res.json(savedContact)
}

