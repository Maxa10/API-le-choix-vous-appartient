require("dotenv").config({path: '/.env'});
const mongoose = require("mongoose");
const URI = `${process.env.MONGO_URI}`;
console.log(URI); 
mongoose.connect(URI ,{ useNewUrlParser: true });
module.exports = exports = mongoose;