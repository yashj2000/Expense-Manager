const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`server running on ${mongoose.connection.host}`.yellow.bold);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
    }
}

module.exports = connectDb;