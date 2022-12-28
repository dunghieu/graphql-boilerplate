import {UserResolvers} from '@generated/resolvers-types';

export const User: UserResolvers = {
  __resolveType: (user) => {
    // @ts-ignore
    return user.role;
  },
};


