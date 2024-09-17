const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const compression = require('compression')
const { errorConverter, errorHandler } = require('./middlewares/error.middleware')

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(compression())
app.use(session({
    secret: 'your-secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        sameSite: 'lax',
        maxAge: 1 * 60 * 60 * 10000,
        secure: true,
        httpOnly: true,
    },
}));

app.disable('x-powered-by')

app.use(errorConverter)
app.use(errorConverter)

app.use('/v1', require('./routes/user.route'))

module.exports = app