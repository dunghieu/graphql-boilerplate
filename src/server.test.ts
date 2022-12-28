import {readFileSync} from 'fs';
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
const depthLimit = require('graphql-depth-limit');

const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'});
import {Context, contextFactory} from './context';
import resolvers from './resolvers';


// addMocksToSchema accepts a schema instance and provides
// mocked data for each field in the schema
const mockServer = new ApolloServer<Context>({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  }),
  validationRules: [depthLimit(7)],
})


