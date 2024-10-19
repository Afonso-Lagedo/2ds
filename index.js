//import librarys
const Sequelize = require("sequelize");//sequelize
const express = require("express");//express
//Clonando a varável com poderes das bibliotecas 
const app = express(); //Express
const { create } = require("express-handlebars");


//###CONEXÃO BANCO DE DADOS###
const conexaoComBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
//### FIM CONEXÃO BANCO DE DADOS###


//###ROTAS:
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

app.get("/cad", function (req, res) {
  //res.send("Rota de cadastro de postagem");
  res.render("form"); //renderizando a pagina form.handlebars
});
//###FIM ROTAS


//Template Engine
const abs = create({ defaultLayout: "main" }); //definindo layout padrão
app.engine("handlebars", abs.engine); //denfinindo o motor e o recheio 
app.set("view engine", "handlebars"); //definindo o tipo e o tipo 

//"LIGANDO O SERVIDOR"
//SEMPRE MANTENHA NO FINAL DO CÒDIGO 
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});