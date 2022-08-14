import prisma from '../db'

export default async(req: { method: string; body: string },res: any)=>{

    if (req.method !== 'GET') {
        return res.status(405).json({message: "Method not allowed"})
    }

    const lData = JSON.parse(req.body)
    
    console.log("Haettu data: ", lData)
    const lueHuollot = await prisma.huolto.findmany()
    
    res.json(lueHuollot)
}