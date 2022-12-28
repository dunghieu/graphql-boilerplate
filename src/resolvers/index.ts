import {Resolvers} from '@generated/resolvers-types';
import Query from './Query';
import Mutation from './Mutation';
import Post from './Post';
import Host from './Host';
import User from './User';
import { dateScalar } from '../common/scalars';
  
const resolvers: Resolvers = {
  Query,
  Mutation,
  Post,
  Host, 
  User,
  Date: dateScalar
};

export default resolvers;
