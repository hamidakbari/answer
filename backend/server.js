import express from 'express';
import request from 'request';
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});
app.get('/users', (req, res) => {
  request(
    {
      url: 'https://jsonplaceholder.typicode.com/users',
      json: true, // this option parses the response's body as JSON
    },
    (error, response, body) => {
      res.send(body);
    }
  );
});

app.listen(5000, () => {
  console.log('app is listening on port 5000');
});
