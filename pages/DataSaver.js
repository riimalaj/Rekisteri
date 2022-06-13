import { PrismaClient } from '@prisma/client'


export default async function getServerSideProps(props){
    console.log("ContactSaver->", props)
    const prisma = new PrismaClient({
        log: [
            { level: 'warn', emit: 'event' },
            { level: 'info', emit: 'event' },
            { level: 'error', emit: 'event' },
          ],
        })
        
        prisma.$on('warn', (e) => {
          console.log(e)
        })
        
        prisma.$on('info', (e) => {
          console.log(e)
        })
        
        prisma.$on('error', (e) => {
          console.log(e)
        })
        
    
        await prisma.Playlist.create(props.stuff)            
        
}