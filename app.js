const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json())


app.use('/v1', require('./routes/user.route'))

module.exports = app