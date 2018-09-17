// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    searchPath: 'public',
    connection: {
      database: 'tm_development',
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    }
  },
  test: {
    client: 'postgresql',
    searchPath: 'public',
    connection: {
      database: 'tm_test',
      user: process.env.DB_USER,
      host: process.env.DB_HOST || '127.0.0.1',
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    }
  },
}
