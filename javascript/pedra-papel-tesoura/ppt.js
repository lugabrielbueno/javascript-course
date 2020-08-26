function pontos_jogador1(){
    var jogador2 = Number(document.getElementById('player2_pontos').textContent);
    var limite = Number(document.getElementById('limite').value);
    var numero = Number(document.getElementById('player1_pontos').textContent);
    if (numero < limite && jogador2 < limite){
        numero += 1;
        document.getElementById('player1_pontos').textContent = String(numero);
    }
    if (numero == limite){
        document.getElementById('player1_pontos').style.color = 'green';
    }
}

function pontos_jogador2(){
    var jogador1 = Number(document.getElementById('player1_pontos').textContent);
    var limite = Number(document.getElementById('limite').value);
    var numero = Number(document.getElementById('player2_pontos').textContent);
    if (numero < limite && jogador1 < limite){
        numero += 1;
        document.getElementById('player2_pontos').textContent = String(numero);
    }
    if (numero == limite){
    document.getElementById('player2_pontos').style.color = 'green';
    }
}
function reiniciar(){
    document.getElementById('player1_pontos').textContent = '0';
    document.getElementById('player1_pontos').style.color = 'black';
    document.getElementById('player2_pontos').textContent = '0';
    document.getElementById('player2_pontos').style.color = 'black';
}