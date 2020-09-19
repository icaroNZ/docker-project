import express from 'express';

import mongoose from 'mongoose';
import initRouter from './routers/index.js';

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}/test`;

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error:'));

const PORT = process.env.PORT || 3002;
const app = express();

initRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
