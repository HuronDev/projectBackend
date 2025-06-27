import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Carlos Paredes',
        email: 'carlos@example.com',
        username: 'charlie27',
        role: 'admin',
        isActive: true,
        phone: '0999999999',
        birthDate: new Date('1997-04-25'),
        address: 'Ecuador',
      },
      {
        name: 'Ana Torres',
        email: 'ana@example.com',
        username: 'ana123',
        role: 'user',
        isActive: true,
        phone: '0988888888',
        birthDate: new Date('1995-06-15'),
        address: 'Guayaquil',
      },
    ],
    skipDuplicates: true, // para evitar errores si ya existen usuarios con esos emails o usernames
  });

  console.log('🌱 Seed completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
