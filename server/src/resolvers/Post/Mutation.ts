import {MutationResolvers} from '@generated/resolvers-types';
import {PostService} from 'src/services';
import {AuthenticationError, BadRequestError} from '../../common/utils/error';

export const Mutation: MutationResolvers = {
  createPost: async (_, {createPostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return PostService.createPost({userId, userRole}, createPostInput, prisma.post);
  },
  updatePost: async (_, {id, updatePostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    return PostService.updatePost({userId, userRole}, id, updatePostInput, prisma.post);
  },
};

