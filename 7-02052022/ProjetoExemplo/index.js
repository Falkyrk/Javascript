//importação do modulo do servidor do módulo express
const express = require("express");

//criação do aplicativo do servidor express
const app = express();

//permitir que o servidor trabalhe com o formato json
app.use(express.json());


//Vamos criar a primeira rota do servidor
//Esta vai ser a rota raiz
app.get("/",(req,res)=>{
    res.send("Olá! Seja bem vindo. Você está na rota raiz!");

});
//definir uma porta de comunicação com o servidor de aplicação
app.listen(5000,()=> console.log("On line em http://localhost:5000"));
