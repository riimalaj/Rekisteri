import type {NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../db'


export default async(req: NextApiRequest, res: NextApiResponse)=>{        
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const contactData = JSON.parse(req.body)
    
    console.log("PostData contact data: ", contactData)
    const savedContact = await prisma.Contact.create({
        data: contactData
    })
    res.json(savedContact)
}


