import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Hello World!',
    url: 'You can find this project on github: https://github.com/xyluis-projects/eslint-prettier-setup',
  });
});

app.listen(3333, () => console.log('Listening on port 3333'));
