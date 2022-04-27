/*
Função anônima é uma função que não tem nome. Ela é atribuida a um elemento de evento ou a uma varuável.
Os elementos de evento podem ser: botões, inputs, imagens e vários outros controles html.
*/
const body = document.body;
//vamos criar um botão para adicionar a página
const btn1 = document.createElement("button");
btn1.innerHTML = "Primeira Função";
//Adicionar o btn1 a página html. Adição feita ao body
body.appendChild(btn1);

//aplicar uma função ao botão btn1
btn1.onclick = function(){
    //capturar a url da página
    var url = window.location;
    window.document.title = "Trocou o título";
    alert("Trocamos o título da página" + url);
};
//Criar um novo botão btn2
const btn2 = document.createElement("button");
btn2.innerHTML = "Segunda Função";

//adicionar btn2 ao body
body.appendChild(btn2);
btn2.onclick = ()=> {
    document.body.style.backgroundColor = "Yellow";
};

//vamos criar uma matriz com produtos
const produtos = [
    ["Produto","Quantidade","Preço"],
    ["Calça","15","R$ 150,00"],
    ["Blusa","35","R$ 35,00"],
    ["Tênis","10","R$ 200,00"],
];

function montarTabela(){

    const div = document.createElement("div");
    var tabela = "<table>";


    for(var linha = 0 ; linha <= 3 ; linha++){
        tabela += "<tr>";

        for(var coluna = 0 ; coluna <= 2 ; coluna++){
            if(linha == 0){
                tabela += `<th>${produtos[linha][coluna]}</th>`;
            }
            else{
                tabela += `<td>${produtos[linha][coluna]}</th>`;
            }
        }
        tabela+="</tr>";
    }
    tabela +="</table>";
    div.innerHTML = tabela;
    body.appendChild(div);


}
const btn3 = document.createElement("button");
btn3.innerHTML = "Terceira função";
body.appendChild(btn3);
btn3.onclick = montarTabela;

const btn4 = document.createElement("button");
btn4.innerHTML = "Quarta Função";
btn4.onclick = () =>{

//Vamos usar um iterador chamado foreach(para cada)
//ele está presente no array
produtos.forEach(function(produto,index){
console.log(`Item da linha ${index} -> ${produto}`);
});

};
body.appendChild(btn4);
const btn5 = document.createElement("button");
btn5.innerHTML = "Quinta Função";
btn5.onclick = () =>{
    produtos.forEach((produto,index)=>{
        produto.forEach((item,ix)=>{
            console.log(`Linha ${index} e coluna S{ix} -> ${item}`);
        })
    })
}
body.appendChild(btn5);