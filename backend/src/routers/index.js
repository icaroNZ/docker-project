import healthCheck from './health.routers.js';
import notes from './notes.routers.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const corsOption = {
  origin: 'http://localhost:3000',
};

function initRouters(app) {
  app.use(cors(corsOption));
  app.use(bodyParser.json());
  app.use(healthCheck);
  app.use(notes);
}

export default initRouters;
