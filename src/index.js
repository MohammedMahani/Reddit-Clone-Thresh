const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Live: http://localhost:${app.get('port')}`);
});
