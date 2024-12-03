import express from 'express'

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  return console.log(`listening on http://localhost:${port}`);
});

export default {}
