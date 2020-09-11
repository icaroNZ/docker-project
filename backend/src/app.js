import express from 'express';

const PORT = 3001;
const app = express();

app.get('/test', (request, response) => {
  response.send('Hello from express!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
