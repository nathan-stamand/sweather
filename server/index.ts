import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';
import cors from 'cors'
import { resolvers, typeDefs } from './schema/index.js';

const port = 8000;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/graphql',
  cors<cors.CorsRequest>({ origin: 'http://localhost:3000' }),
  express.json(),
  expressMiddleware(server),
);

await new Promise<void>((resolve) => httpServer.listen({
  port
}, resolve));

console.log(`Server running at http://localhost:${port}`)

export default {}