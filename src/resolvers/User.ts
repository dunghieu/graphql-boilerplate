import {UserResolvers} from '@generated/resolvers-types';

const User: UserResolvers = {
  __resolveType: (user) => {
    // @ts-ignore
    return user.role;
  },
};

export default User;
