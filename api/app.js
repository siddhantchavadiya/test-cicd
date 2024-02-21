const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Home Route Backend is running usign CI/CD Tool.');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
