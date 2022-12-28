import {Prisma} from '@generated/prisma-client';
import {faker} from '@faker-js/faker';

const users: Prisma.UserCreateInput[] = [
  {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    password: faker.internet.password(),
    role: 'Host',
    posts: {
      create: [
        {
          content: faker.lorem.paragraph(),
          photoThumbnail: faker.image.imageUrl(),
          title: faker.lorem.sentence(),
        },
      ],
    },
  },
];
export {users};
