const express = require('express');

const app = express();

app.use('/', require('./index').app)
.listen(3000);

app.get('/api', (req, res) => {
  res.send('Testing get!');
});

app.listen(3000, () => console.log('listening on port 3000'));

