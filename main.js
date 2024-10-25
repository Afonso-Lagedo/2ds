const express = require("express");
const rotas = express();
const Sequelize = require("sequelize");

//###Banco de dados###
const conexaoBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//###Banco de dados###
//create table
const Aluno = conexaoBanco.define("alunos", {
  nome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
});

Aluno.sync({ force: true }); 

//###Rotas###
rotas.get("/", function (req, res) {
    res.send("Rota principal");
});

rotas.get("/salvar/:nome/:idade", async function (req, res) {
    const { nome, idade } = req.params;

    const novoAluno = await Aluno.create({ nome, idade }); //função que espera
  
    res.json({
      resposta: "Aluno criado com sucesso",
      aluno: novoAluno,
    });
});

//###Servidor###
rotas.listen(3031, function () {
    console.log("Server is running on port 3031");
});