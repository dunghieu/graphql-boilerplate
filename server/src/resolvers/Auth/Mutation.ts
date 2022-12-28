import {MutationResolvers} from '@generated/resolvers-types';
import {AuthService} from 'src/services';

export const Mutation: MutationResolvers = {
  signup: async (_, args, {prisma}) => {
    return AuthService.signUp(args, prisma.user);
  },
  login: async (_, args, {prisma}) => {
    return AuthService.validateUser(args.email, args.password, prisma.user);
  },
};


