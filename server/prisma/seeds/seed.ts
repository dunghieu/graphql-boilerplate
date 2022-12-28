import {PrismaClient} from '@prisma/client';
import { users } from './data';

const prisma = new PrismaClient();

async function main() {
  users.map(async (user) => {
    await prisma.user.upsert({
      where: {email: user.email},
      update: {},
      create: user,
    });
  })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
