'use strict';

/*Ex1: A: Especificar as variáveis contantes, logo após a declaração do 'use strict'*/
const message = document.querySelector('#message'); //aceder a um elemento DOM
const panelControl = document.querySelector("#panel-control");
const panelGame = document.querySelector("#panel-game");
const btLevel = document.querySelector("#btLevel");
const btPlay = document.querySelector("#btPlay");

/*Ex1: B: Implementar a função reset()*/
function reset(){
    //Ex1: B: 1: esconder o panelGame, com a propriedade display none
    panelGame.style.display = 'none';

    /*Ex1: B: 3: Eliminar o texto existente no elemento message, especificando a propriedade textContent='', 
      e colocar o elemento visível, removendo a class hide, com recurso à propriedade classList.*/
    message.style.display = 'block';
    message.classList.remove('hide');

    /*Ex1: B: 4: Criar uma variável que obtenha todos os elementos especificados com a classe .gameStarted existentes
      no painelControl, usando o querySelectorAll.*/
    const gameStarted = document.querySelectorAll('.gameStarted');

    /*Ex1: B: 5: Com recurso ao forOf ou forEach, percorrer todos os elementos obtidos na alínea anterior
      de forma a adicionar a class ‘hide’, usando a propriedade classList e o método add*/
    for (let iterator of gameStarted)
        iterator.classList.add('hide');

    /*Ex1: B: 6: Implementar o código de forma a que o elemento #btPlay fique desativado, usando o disabled*/
    //btPlay.disabled = true;
    
    
    /******************************* Exercicio 2 *******************************/
    /*Ex2: A: O botão “Iniciar Jogo” fica  sempre  desativo, para ficar apenas desativo se a opção selecionada 
    for “Seleccione...”, opção cujo valor é ‘0’, caso contrário, se for selecionado um dos níveis, o elemento 
    #btPlay deve ficar activo. Para obter o valor da opção selecionada usa-se à propriedade value.*/
    /*Ex2: B: O panelGame deverá ficar visível quando se seleciona um nível, aplicando para isso o estilo 
      grid à propriedade display.*/
    let selectedLevel = btLevel.value;
    if(selectedLevel == 0){
        btPlay.disabled = true;
        panelGame.style.display = "none";
        message.style.display = "none";
    }else{
        btPlay.disabled = "";
        panelGame.style.display = "grid";
    }

}

/*Ex3: B: A função startGame deve especificar o texto “Terminar Jogo” ao botão btPlay, o elemento de selecção do
  Nivel deve ficar inativo, deve ser removido a class ‘hide’ a todos elementos especificados com a classe .gameStarted
  e adicionada a class hide ao elemento message*/
function startGame(){
    btPlay.textContent = 'Terminar Jogo';
    btLevel.disabled = true;
    message.classList.add('hide');
    const elementos = panelControl.querySelectorAll('.gameStarted');

    elementos.forEach(elemento => {
        elemento.classList.remove('hide')
    });
}

/*Ex3: C: A função stopGame deve especificar o texto “Iniciar Jogo” ao botão btPlay, o elemento de selecção do 
  Nivel (btLevel) volta a ficar ativo e invocar a função Reset.*/
function stopGame(){
    btPlay.textContent = 'Iniciar Jogo';
    btLevel.disabled = false;
    btLevel.value=0;
    reset();
}

//Ex1: B: 2: Invocar a função reset
reset();

/*Ex2: C: Implementar um Event Listener de forma a que, sempre que houver uma alteração à opção selecionada
  no elemento btLevel, seja executada esta função reset.*/
btLevel.addEventListener('change', reset);

/*Ex3: A: Implementar um Event Listener para o elemento btPlay de forma a que quando se clica nele, se o texto
  for “Terminar Jogo”, deve invocar a função stopGame, caso contrário deve invocar a função startGame*/
btPlay.addEventListener('click', () => {
    if (btPlay.textContent == 'Terminar Jogo')
        stopGame();
    else
        startGame();
});

/*Ex4: Quando se clicar no panelGame, não se deve encontrar a mensagem “Clique em Iniciar Jogo!” se o jogo estiver
  a decorrer, caso contrario a mensagem deve aparecer*/
panelGame.addEventListener('click', () => {
    if (btPlay.textContent == 'Iniciar Jogo')
        message.textContent="Clique em Iniciar Jogo!";
    else
        message.textContent="";
});