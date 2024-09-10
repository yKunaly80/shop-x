const mongoose = require('mongoose')

const connectionUrl = 'mongodb+srv://ykunaly80:ShopX1280@shopx.18qjf.mongodb.net/'
const mongoDBConnection = async () => {
    try {
       const con = await mongoose.connect(connectionUrl)
        console.log('connection Establish with ==>',con.connection.host)
    } catch (error) {
        console.log('error==>', error)
    }
}

module.exports = mongoDBConnection