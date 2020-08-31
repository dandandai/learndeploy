require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes')
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//costomized header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next();
});

app.use(morgan('common'));
app.use('/v1',routes);

//listen method tells whether sever runs, always put at last
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});