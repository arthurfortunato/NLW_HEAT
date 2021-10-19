import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { router } from './routes';

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

app.use(express.json())

app.use(router);

app.get('/github', (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
})

app.listen(4000, () => console.log('Server is running on PORT 4000'));

