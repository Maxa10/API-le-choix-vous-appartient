require("dotenv").config();
const userRoute = require("./routes/userRoute");
const express = require("express");
const app = express();
const port = process.env.APP || 3500;
const connexion = require("./database");
console.log(port);
app.listen(port, function(err){
    if (err){
        console.log(err);
    }
    console.log("server listening on port" + port);
});


app.use("/api/users", userRoute);