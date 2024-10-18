//import library
const Sequelize = require("sequelize");
//keys
const cu = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

cu
  .authenticate() //veficar se a conexão foi bem sucedida
  .then(function () {
    console.log("Conexão realizada com Sucesso!");
  }) //se sim
  .catch(function (err) {
    console.log("Erro ao conectar com o banco de dados: " + err);
  }); //se não