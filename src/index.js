var express = require("express");
var app = express();
var port = process.env.port || 8080;
var routes = require("./routes.js");

app.set("view engine", "ejs");
app.use("/", routes);

app.listen(port);
