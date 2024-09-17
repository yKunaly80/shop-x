const dotenv = require('dotenv');
const http = require('http');
const mongoose = require('mongoose')
const app = require('./app');

dotenv.config()

const main = async () => {
    try {

        await mongoose.connect(process.env.DB_URI)
        console.log('MongoDb Connected Sucessfully');

        const server = http.createServer(app);
        const PORT = process.env.PORT;

        server.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on :\nhttp://localhost:${PORT}\nhttp://192.168.0.105:${PORT}`)
        });

        // server.listen(PORT, '0.0.0.0')
        // console.log(`Server is running on :\nhttp://localhost:${PORT}\nhttp://192.168.0.105:${PORT}`)

    } catch (error) {
        console.log('error==>', error)
    }
}

main()