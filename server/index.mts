import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  console.log(req)
  res.json({ message: 'testing!' });
});

app.listen(port, () => {
  return console.log(`listening on http://localhost:${port}`);
});

export default {}
