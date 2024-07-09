module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'journal', 
    password: '4578', 
    database: 'journaling', 
    entities: ['src/entity/**/*.js'],
    synchronize: true,
  };
  