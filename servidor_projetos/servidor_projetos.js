var http = require('http');
var express = require('express');
let bodyParser = require("body-parser");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando!");

// Lista para armazenar usuários cadastrados
let usuarios = [];

app.get("/", function(req,res){
    res.redirect("Projetos/projetos.html")
});

app.get("/cadastrar", function(req,res){
    res.redirect("Projetos/cadastro.html")
});

app.get("/login", function(req,res){
    res.redirect("Projetos/login.html")
});

// Cadastro de usuário
app.post("/cadastrar", function(req,res){
    let nome = req.body.Nome;
    let user = req.body.User;
    let senha = req.body.Senha;
    console.log("Cadastro:", nome, user, senha);

    // Adiciona o novo usuário
    usuarios.push({nome, user, senha});

    res.redirect("/login"); // Agora redireciona direto para a tela de login
});

// Login de usuário
app.post("/login", function(req,res){
    let user  = req.body.User;
    let senha = req.body.Senha;
    console.log("Tentativa de login:", user, senha);

    // Procura usuário na lista
    let encontrado = usuarios.find(u => u.user === user && u.senha === senha);

    if (encontrado) {
        // Login correto
        res.render("resposta", {nome: encontrado.nome, user: encontrado.user, senha: encontrado.senha, erro: null});
    } else {
        // Login errado
        res.render("resposta", {nome: null, user: null, senha: null, erro: "Usuário ou senha incorretos!"});
    }
});










