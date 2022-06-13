import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient() 

export default async function Read(){
    console.log("Read function")
    const res = await prisma.Playlist.findMany()
    
    
    return(
        <span>{res}</span>
    )
}