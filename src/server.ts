import express from 'express';

const app = express();
const port = 3000;

app.get('/error-with-text', (req, res) => {
  res.status(500).send('This is a 500 error message');
});

app.get('/error-no-text', (req, res) => {
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 