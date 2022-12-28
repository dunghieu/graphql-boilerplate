import {HostResolvers} from '@generated/resolvers-types';

export const Host: HostResolvers = {
    posts: async (parent, _, {prisma}) => {
    const posts = (await prisma.user
      .findUnique({
        where: {id: parent.id},
        select: {posts: {include: {author: true}}},
      })).posts;
    return posts;
  },
};

