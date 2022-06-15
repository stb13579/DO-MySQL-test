console.log(process.env.DATABASE_URL);

const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
    client: 'mysql',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
      debug: false,
  },
});



