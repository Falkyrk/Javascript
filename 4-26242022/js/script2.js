function array1(){
    var nomes = ["Paulo", "Helena", "Vanessa"];
    
    for(var i = 0 ; i < nomes.leight; i++){ 
    console.log(nomes[i]);
    }
    nomes.push("Guilherme");
    console.log(nomes);

    nomes.push("Guilherme");
    console.log(nomes);

    nomes.pop();
    console.log(nomes);

    nomes.shift();
    console.log(nomes);

    nomes.unshift("Wagner");
    nomes.push("Gabriela");
    console.log(nomes);

    var dados = [
                    ["Nome","Idade"],
                    ["Pedro","15"],
                    ["Marcos","21"],
                    ["Debora","22"],
    ];

    console.log(dados);

}