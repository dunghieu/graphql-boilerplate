import {QueryResolvers} from '@generated/resolvers-types';
import {AuthenticationError, BadRequestError} from '../common/utils/error';
import { UserService, PostService, AuthService } from 'src/services';


const Query: QueryResolvers = {
  me: async (_, __, {prisma, userId}) => {
    return AuthService.getCurrentUser(userId, prisma.user);
  },
  user: async (_, args, {prisma}) => {
    return UserService.getUser(args.id, prisma.user);
  },
  post: async (_, args, { prisma }) => {
    return PostService.getPost(args.id, prisma.post);
  },
  hostPosts: async (
    _,
    {criteria:{after, pageSize=20}},
    {prisma, userId, userRole}
  ) => {
    if (userRole !== 'Host') throw AuthenticationError();
    return PostService.getHostPosts(userId, {after,pageSize},prisma.post);
  },
  searchPosts: async (_, {criteria:{after, pageSize=20}}, {prisma}) => {
    return PostService.searchPosts({after, pageSize}, prisma.post);
  },
  users: async (_, __, {prisma}) => {
    return UserService.getUsers(prisma.user);
  }
};

export default Query;
