import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {    
  console.log(handler);
  //await prisma.Playlist.create({fName:Reetta,lName:"Riimala",age:18})
  const playlists = await prisma.Playlist.findMany();
  const data = res.json(playlists);  
  console.log("data:" ,data)
}

