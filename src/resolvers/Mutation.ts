import {MutationResolvers} from '@generated/resolvers-types';
import {AuthService, PostService, UserService} from 'src/services';
import {AuthenticationError, BadRequestError} from '../common/utils/error';

const Mutation: MutationResolvers = {
  signup: async (_, args, {prisma}) => {
    return AuthService.signUp(args, prisma.user);
  },
  login: async (_, args, {prisma}) => {
    return AuthService.validateUser(args.email, args.password, prisma.user);
  },
  createPost: async (_, {createPostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return PostService.createPost({userId, userRole}, createPostInput, prisma.post);
  },
  deleteUser: async (_, {id}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return UserService.deleteUser({userRole}, id, prisma.user);
  },
  updateProfile: async (_, {updateProfileInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return UserService.updateProfile({ userId, userRole }, updateProfileInput, prisma.user);
  },
  updatePost: async (_, {id, updatePostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return PostService.updatePost({userId, userRole}, id, updatePostInput, prisma.post);
  },
};

export default Mutation;
