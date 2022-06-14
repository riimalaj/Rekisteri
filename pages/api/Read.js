import { PrismaClient } from "@prisma/client"



export default async function getData() {  
  const prisma = new PrismaClient() 
  console.log("getData function in /api/Read.js")
    const res = await prisma.Playlist.findMany()
    res.map((r) => {
        console.log(r.fName)
    })
     
    return {
      props: {res} // will be passed to the page component as props
    }    
  }





  
  