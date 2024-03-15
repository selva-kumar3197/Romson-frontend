// server.ts
import { createServer } from 'http';
import middleware from './src/middleware/language'; 
import { createRequestHandler } from '@vercel/node';

const port = parseInt(process.env.PORT, 10) || 3000;

const requestHandler = createRequestHandler();

const server = createServer((req, res) => {
  middleware(req)
    .then(() => requestHandler(req, res))
    .catch((err) => {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
