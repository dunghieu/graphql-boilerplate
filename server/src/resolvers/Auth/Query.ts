import {PostResolvers, QueryResolvers} from '@generated/resolvers-types';
import {AuthService} from 'src/services';

export const Query: QueryResolvers = {
  me: async (_, __, {prisma, userId}) => {
    return AuthService.getCurrentUser(userId, prisma.user);
  },
};
