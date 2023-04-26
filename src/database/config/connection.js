const { Pool } = require('pg');

require('dotenv').config();

const { DEV_DB_URL, DATABASE_URL, NODE_ENV } = process.env;

const option = {
  connectionString: NODE_ENV === 'development' ? DEV_DB_URL : DATABASE_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(option);

module.exports = {
  connection,
};
