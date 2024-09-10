const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
app.use('/v1', require('./routes/user.route'))
// app.get('/api', (req, res) => {
//     res.send('hello world')
// })

// app.get('/apiJson', (req, res) => {
//     res.send({
//         name:'kunal',
//         age:22
//     })
// })

module.exports = app