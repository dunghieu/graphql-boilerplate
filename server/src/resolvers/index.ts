import {Resolvers} from '@generated/resolvers-types';
import {Query as PostQuery, Mutation as PostMutation, Post} from './Post';
import {Query as UserQuery, Mutation as UserMutation, Host, User} from './User';
import {Query as AuthQuery, Mutation as AuthMutation} from './Auth';
import {dateScalar} from '../common/scalars';

const resolvers: Resolvers = {
  Query: {
    ...PostQuery,
    ...UserQuery,
    ...AuthQuery,
  },
  Mutation: {
    ...PostMutation,
    ...UserMutation,
    ...AuthMutation,
  },
  Post,
  Host,
  User,
  Date: dateScalar,
};

export default resolvers;
