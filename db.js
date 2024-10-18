//import library
const Sequelize = require("sequelize");
//keys
const conexaoComBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = conexaoComBanco.define("postagens", {
    titulo: {
      type: Sequelize.STRING,//VARCHAR
    },
    conteudo: {
      type: Sequelize.TEXT,//TEXTAREA
    },
});

//Postagem.sync({ force: true });

//INSERT
Postagem.create({
  titulo: "Um titulo qualquer",
  conteudo: "Um conteudo qualquer",
});