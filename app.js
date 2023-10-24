const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Dockerized SISTER, This Is A Learning Dockerfile To Node.js App!');
});

app.listen(port, () => {
  console.log(`The App is running on port ${port} And Enjoy!`);
});
