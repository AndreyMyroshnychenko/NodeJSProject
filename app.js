const express = require('express');
const jwt = require('jsonwebtoken');
const routes = require('./routes');
const db=require('./db');
const app = express();
app.use(express.json());
app.use(routes);
const port = 3000;

app.post('/login', (req, res) => {
  
  const user = { id: 1, username: 'john.doe' };

  // Генерація JWT
  jwt.sign(user, 'secret_key', { expiresIn: '30m' }, (err, token) => {
    if (err) {
      return res.sendStatus(500);
    }
    res.json({ token });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
