/*var rola = require("http");

rola.createServer(function (req, res) {
    res.end("Hello World");
  }).listen(3300);

console.log("Server is running on port 3300");*/

//Criando uma variável com os poderes de Express que é um gerenciador de rotas
const express = require("express");

//Clonando a varável com poderes de express para manipular
const app = express();

//ROTAS:
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

app.get("/login/:email/:senha/:idade", function (req, res) {
    res.send(req.params);
});

app.get("/htmlteste", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

//SEMPRE MANTENHA NO FINAL DO CÒDIGO JJ
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});