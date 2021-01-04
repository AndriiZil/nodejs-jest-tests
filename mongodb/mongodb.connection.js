const mongoose = require('mongoose');
const dotEnv = require('dotenv');

dotEnv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error('Error connecting to mongoDb');
        console.error(err);
    }
}

module.exports = {
    connect
}