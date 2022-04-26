function verificarCPF(){
    var cpfUsuario = document.getElementById("cpf").value;
    /*
    O comando substring permite "quebrar" uma string em carasteres assim você consegue pegar a quantidade de caracteresque quiser.
    No caso abaixo estamos pegando o primeiro caracteres. Temos, então os 9 primeiros, numeros do cpf.
     */
    var cpfCalc = cpfUsuario.substring(0,9);
    console.log(cpfCalc);
    var peso10 = 10;
    var peso11 = 11;
    var resultado = 0;
    var resto = 0;
    for (var i = 0; i < 9 ; i++) {
    resultado += cpfCalc[i] * peso10;
    peso10--;
    }
    console.log(resultado);

    resto = resultado % 11;

    if(resto < 2){
        cpfCalc+=0;
    }
    else{
        cpfCalc+=(11-resto);
    }
    console.log(cpfCalc);

    // vamos zerar a variavel resultado;
    resultado = 0;

    for(var i=0; i < 10; i++) {
        resultado += cpfCalc[i] * peso11;
        peso11--;
    }

    resto = resultado % 11;
    if (resto < 2){
        cpfCalc+=0;
    } else {
        cpfCalc += 11-resto;
    }

    if (cpfCalc != cpfUsuario){
        alert("CPF Incorreto!");
    }



}