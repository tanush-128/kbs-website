const express = require('express');
require('dotenv').config()
const port = process.env.BACKEND_PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});