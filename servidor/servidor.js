require('colors')
var http = require('http');
var express = require('express');
let bodyParser = require("body-parser");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.set('views', './views');


var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...".rainbow)

app.get("/Inicio", function(requisicao, resposta){
    resposta.redirect("aula 1/INDEX.HTML")
})

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("aula 1/INDEX.HTML")
})

/*app.get("/cadastrar",function(requisicao,resposta){
    let nome = requisicao.query.Nome 
    let login = requisicao.query.Login
    let senha = requisicao.query.Senha 
    let nasc = requisicao.query.Nascimento

    console.log(nome, login, senha, nasc)
})*/

app.post("/cadastrar", function(requisicao, resposta) {
    let nome = requisicao.body.Nome;
    let login = requisicao.body.Login;
    let senha = requisicao.body.Senha;
    let nasc = requisicao.body.Nasc;

    console.log(nome, login, senha, nasc);

    // Passando os dados como um objeto
    resposta.render("resposta", {nome,login,senha,nasc});
});

app.get("/for_ejs", function(requisicao,resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})
