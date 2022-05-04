//importação do modulo do servidor do módulo express
const express = require("express");



//importação do módulo mongoose
const mongoose = require("mongoose");

//criação do aplicativo do servidor express
const app = express();

//permitir que o servidor trabalhe com o formato json
app.use(express.json());


/*URL de conexão com o bando de dados mongodb

mongodb+srv://cauam:<password>@projetoback.gza52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

*/
const urldb = "mongodb+srv://cauam:1945mongodb@projetoback.gza52.mongodb.net/bancodados?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });


/*
Criar a estrutura da tabela para clientes
*/
const tabela = mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
})

//Criar um modelo de dados, ou seja, criar a tabela com a estrutura
const Cliente = mongoose.model("tbcliente", tabela);




//Vamos criar a primeira rota do servidor
//Esta vai ser a rota raiz
app.get("/", (req, res) => {

    //Vamos trazer todos os clientes cadastrados e exibir em tela
    Cliente.find((erro, dados) => {
        if (erro) return res.status(500).send({ output: `Erro ao carregar clientes -> ${erro}` });
        res.status(200).send({ output: dados });
    });

});

// vamos criar a rota com o verbo post. É usado quando se deseja cadastrar algum dado ou para fazer sistema de login
app.post("/cadastro", (req, res) => {
    //Vamos criar um novo cliente apartir dos dados enviados
    const cli = new Cliente(req.body);

    //Comando Save para gravar os dados no banco de dados
    cli.save().then((dados) => {
        res.status(201).send({ output: `Cliente cadastrado`, info: dados });
    })
        .catch((erro) => res.status(500).send({ output: `Erro ao cadastrar->${erro}` }));


});

//Rota para atualizar os dados dos clientes.
//Vamos usar o verbo PUT
//Para atualizar, precisaremos de duas informações. A primeira é o ID do dado que você deseja atualizar.
//A segunda são os dados que deseja atualizar.
app.put("/atualizar/:id", (req, res) => {
    Cliente.findByIdAndUpdate(req.params.id, res.body,{new:true},(erro,dados) => {
        if(erro)return res.status(404).send({output:`Erro ao atualizar: ${erro}`});
    res.status(200).send({output:`Atualizado`, info:dados});
    }
    );

});

//Para deletar um dado iremos usar o verbo DELETE passando o ID
app.delete("/apagar/:id", (req, res) => {
    res.status(204).send({ output: `Apagou` });
});





//definir uma porta de comunicação com o servidor de aplicação
app.listen(5000, () => console.log("On line em http://localhost:5000"));
