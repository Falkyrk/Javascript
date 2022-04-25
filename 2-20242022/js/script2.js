function repeticao1(){
    for(var i = 0 ; i <= 10; i++){
        console.log(i);
    }
}
function galeria(){
    const miniatura = document.getElementById("miniatura");
    const painel = document.getElementById("painel");

    for(var i = 1 ; i <= 5; i++){
        miniatura.innerHTML += "<img src=img/foto"+i+".jpg id=foto"+i+">";
    }
    abrirNoPainel();
}

function abrirNoPainel(){
    document.getElementById("foto1").onclick = function(){
        painel.innerHTML = "<img src=img/foto1.jpg>";
    };
    document.getElementById("foto2").onclick = function(){
        painel.innerHTML = "<img src=img/foto2.jpg>";
    };
    document.getElementById("foto3").onclick = function(){
        painel.innerHTML = "<img src=img/foto3.jpg>";
    };
    document.getElementById("foto4").onclick = function(){
        painel.innerHTML = "<img src=img/foto4.jpg>";
    };
    document.getElementById("foto5").onclick = function(){
        painel.innerHTML = "<img src=img/foto5.jpg>";
    };
}