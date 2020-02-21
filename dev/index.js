const express = require('express');
const api = require('../api/index.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use('/api', api);

app.listen(port, () => {
  console.log(`Pageshot server running on http://localhost:${port}`);
});

app.on('error', err => {
  console.error('ERR_APP:', err);
});

process.on('uncaughtException', err => {
  console.error(`UncaughtException: ${err}`);
  process.exit(1);
});
