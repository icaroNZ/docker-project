import express from 'express';
import cors from 'cors';

const PORT = 3001;
const app = express();

const corsOption = {
  origin: 'http://localhost:3000',
};

app.get('/test', cors(corsOption), (request, response) => {
  response.send('Hello from express!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
