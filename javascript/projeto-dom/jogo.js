
//criando eventos de clique 

var gerador = document.getElementById('gerar');
gerador.addEventListener('click',function(){
    var cor = document.getElementById('cor_codigo');
    cor.textContent = "("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    var selecione = cor.textContent;
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa4').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa5').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa6').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";

});

var facil = document.getElementById('facil');
facil.addEventListener('click',function(){
    var cor = document.getElementById('cor_codigo');
    cor.textContent = "("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    var selecione = cor.textContent;
    document.getElementById('dificuldade_dois').style.display = 'none';
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
});


var dificil = document.getElementById('dificil');
dificil.addEventListener('click',function(){
    document.getElementById('dificuldade_dois').style.display ='table-row';
    var cor = document.getElementById('cor_codigo');
    cor.textContent = "("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    var selecione = cor.textContent;
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa4').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa5').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa6').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
});

//funções

function randint(min,max){
    return min + Math.floor((max - min) * Math.random());
}

function random_item(items){
  
return items[Math.floor(Math.random()*items.length)];
     
}

