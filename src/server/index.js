const express = require('express');
const port = process.env.PORT || 8080;
const cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/skilldrive', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connection to MongoDB has been established'));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { usersRouter } = require('./router/user-router');
app.use('/api/users',cors(), usersRouter)

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
