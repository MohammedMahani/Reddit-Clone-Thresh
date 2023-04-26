const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const router = require('./router');
const { clientError, serverError } = require('./controller');

const app = express();
app.set('port', process.env.PORT || 4000);

app.disable('x-powered-by');
app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  express.static(join('public')),
  cookieParser(),
  compression(),
]);

app.use('/api/v1/', router);
app.use('/logged', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'loggedMain.html'));
});

app.use(serverError);
app.use(clientError);

module.exports = app;
