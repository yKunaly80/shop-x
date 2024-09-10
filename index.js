
const http = require('http');
const mongoDBConnection = require('./configs/database')
const app = require('./app');

const main = async () => {

    await mongoDBConnection()

    const server = http.createServer(app);
    const PORT = 9008;
    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on http://192.168.0.105:${PORT}`)
    });
}

main()