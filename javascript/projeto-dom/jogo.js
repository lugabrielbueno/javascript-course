var cor = document.getElementById('cor_codigo');
var esc = "("+randint(0,255)+", "+randint(0,255)+", "+randint(0,255)+")";
cor.textContent = esc;
document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
document.getElementById('alternativa4').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
document.getElementById('alternativa5').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
document.getElementById('alternativa6').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
principal(esc);
//criando eventos de clique 

var gerador = document.getElementById('gerar');
gerador.addEventListener('click',function(){

    var cor = document.getElementById('cor_codigo');
    var esc = "("+randint(0,255)+", "+randint(0,255)+", "+randint(0,255)+")";
    cor.textContent = esc;
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa4').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa5').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa6').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    principal(esc);

});

var facil = document.getElementById('facil');
facil.addEventListener('click',function(){

    var cor = document.getElementById('cor_codigo');
    var esc = "("+randint(0,255)+", "+randint(0,255)+", "+randint(0,255)+")";
    cor.textContent = esc;
    document.getElementById('dificuldade_dois').style.display = 'none';
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    principal(esc);
});


var dificil = document.getElementById('dificil');
dificil.addEventListener('click',function(){
    document.getElementById('dificuldade_dois').style.display = 'table-row';
    var cor = document.getElementById('cor_codigo');
    var esc = "("+randint(0,255)+", "+randint(0,255)+", "+randint(0,255)+")";
    cor.textContent = esc;
    document.getElementById('alternativa1').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa2').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa3').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa4').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa5').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    document.getElementById('alternativa6').style.backgroundColor = "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";
    principal(esc);
});

//funções

function principal(arg){
    var um = document.getElementById('alternativa1');
    var dois = document.getElementById('alternativa2');
    var tres = document.getElementById('alternativa3');
    var quatro = document.getElementById('alternativa4');
    var cinco = document.getElementById('alternativa5');
    var seis = document.getElementById('alternativa6');
    escolhas = [um, dois,tres,quatro,cinco,seis];
    escolhido = random_item(escolhas);
    escolhido.style.backgroundColor = "rgb"+arg;


}

function randint(min,max){
    return min + Math.floor((max - min) * Math.random());
}

function random_item(items){
  
return items[Math.floor(Math.random()*items.length)];
     
}

function check(id){
    var checar = document.getElementById(id);
    if (checar.style.backgroundColor == ('rgb'+(document.getElementById('cor_codigo').textContent))){
        document.getElementById('texto').textContent = 'PARABÉNS, VOCÊ ACERTOU!!!'
        document.getElementById('head').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa1').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa2').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa3').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa4').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa5').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
        document.getElementById('alternativa6').style.backgroundColor = 'rgb'+(document.getElementById('cor_codigo').textContent);
    }else{
        document.getElementById('texto').textContent = 'Tente Novamente'
        return checar.style.display = 'none';
    }
}