import {PostResolvers, QueryResolvers} from '@generated/resolvers-types';
import {UserService, PostService, AuthService} from 'src/services';
import {AuthenticationError, BadRequestError} from '../../common/utils/error';

export const Query: QueryResolvers = {
  hostPosts: async (_, { criteria: { after, pageSize = 20 } }, { prisma, userId, userRole }) => {
    console.log('hostPosts', userId, userRole)
    if (userRole !== 'Host') throw AuthenticationError();
    return PostService.getHostPosts(userId, {after, pageSize}, prisma.post);
  },
  searchPosts: async (_, { criteria: { after, pageSize = 20 } }, { prisma }) => {
    return PostService.searchPosts({after, pageSize}, prisma.post);
  },
  post: async (_, args, {prisma}) => {
    return PostService.getPost(args.id, prisma.post);
  },
};
