import express from 'express';
import compression from 'compression';
import cors from 'cors';
import GraphQLHTTP from 'express-graphql';
import schema from './schemas/index';

const app = express();
app.use('*', cors());
app.use(compression());

app.use('/', GraphQLHTTP({
    schema,
    graphiql: true
}));

const port = 5300;

app.listen( { port: port }, () => console.log(`Running: http://localhost:${port}/graphql`) );