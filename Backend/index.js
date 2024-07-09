require('reflect-metadata');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createConnection } = require('typeorm');
const authRoutes = require('./routes/auth');
const journalRoutes = require('./routes/journals');
const userRoutes = require('./routes/user');

createConnection().then(() => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/auth', authRoutes);
  app.use('/journals', journalRoutes);
  app.use('/user', userRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
