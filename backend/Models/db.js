const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`mongodb is connected ....`);
    }).catch((error) => {
        console.log(`mongo db is faceing this error = `, error.message)
    })