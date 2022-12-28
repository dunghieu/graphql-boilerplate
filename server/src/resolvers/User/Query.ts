import {PostResolvers, QueryResolvers} from '@generated/resolvers-types';
import {UserService} from 'src/services';

export const Query: QueryResolvers = {
  user: async (_, args, {prisma}) => {
    return UserService.getUser(args.id, prisma.user);
  },
  users: async (_, __, {prisma}) => {
    return UserService.getUsers(prisma.user);
  },
};
