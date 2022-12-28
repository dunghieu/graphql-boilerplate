import {MutationResolvers} from '@generated/resolvers-types';
import {UserService} from 'src/services';
import {AuthenticationError, BadRequestError} from '../../common/utils/error';

export const Mutation: MutationResolvers = {
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
    return UserService.updateProfile({userId, userRole}, updateProfileInput, prisma.user);
  },
};

