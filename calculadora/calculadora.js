const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Olá, Mundo!</h1>")
})

app.listen(8081, function() {
    console.log("Servidor Operando na porta 8081")
})