import mongoose from 'mongoose';

export function testReponse(request, response) {
  response.send('Hello from express with nodemon');
}

export function ping(request, response) {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      response.send({
        message: `Ping fail with error: ${error}`,
        status: 'fail',
      });
    }
    response.send({
      message: `Connection with mongo is up: ${result}`,
      status: 'success',
    });
  });
}
