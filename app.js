const express = require("express");
//const path = require("path");

const app = express();

app.get( "/", (req, res) => {
    res.send("hola mundo");
})

app.listen(8000,() =>{
    console.log("server running on port", 8000);
});