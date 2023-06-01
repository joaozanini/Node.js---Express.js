const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    
    res.send(`${n1 + n2}`)
})

app.listen(8081, function() {
    console.log("Servidor Operando na porta 8081")
})