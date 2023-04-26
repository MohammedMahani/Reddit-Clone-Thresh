const fs = require('fs');
const { join } = require('path');
const { connection } = require('../../config/connection');

const query = fs.readFileSync(
  join(__dirname, '..', '..', 'config', 'build.sql'),
  { encoding: 'utf-8' },
);

connection.query(query).catch((err) => console.log(err));
