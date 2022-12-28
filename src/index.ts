import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';

import {json} from 'body-parser';
import {readFileSync} from 'fs';
import resolvers from './resolvers';
import {Context, contextFactory} from './context';
import cors from 'cors';

const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'});
const depthLimit = require('graphql-depth-limit');


const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(7)],
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
const port = Number.parseInt(process.env.PORT) || 4000;

const startApolloServer = async () => {
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>({
      origin: [
        'https://www.your-app.example',
        'https://studio.apollographql.com',
      ],
      credentials: true,
    }),
    json(),
    expressMiddleware(server, {context: contextFactory})
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({port}, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
};

startApolloServer();
