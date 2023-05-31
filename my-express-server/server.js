const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("Hello");
})

app.listen(8081, function() {
    console.log("server started on port 8081")
});
