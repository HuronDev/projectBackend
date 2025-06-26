import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  console.log('✅ Conexión exitosa a la base de datos')
  await prisma.$disconnect()
}

main().catch(e => {
  console.error('❌ Error al conectar a la base de datos:', e)
})