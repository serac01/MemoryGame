'use strict';

/************************************* Defenir as variaveis da DOM *************************************/
const message = document.querySelector('#message');                 //Mensagem de iniciar jogo
const panelControl = document.querySelector('#panel-control');      //Painel de controlo para clicar em jogar, ver pontuação...
const panelGame = document.querySelector('#panel-game');            //Painel onde estão todas as peças para jogar
const btLevel = document.querySelector('#btLevel');                 //Botão para escolher a dificuldade do jogo
const btPlay = document.querySelector('#btPlay');                   //Botão para inciar/teminar o jogo
const gameStarted = document.querySelectorAll('.gameStarted');      //Esta associado a pontução e tempo de jogo
const cards = document.querySelectorAll(".card");                   //Guarda todas as cartas
const cardsFront = document.querySelectorAll(".card-front");
const labelPoints = document.querySelector('#points');              //Label da pontuação
let cardsLogos = ["angular", "bootstrap", "html", "javascript", "vue", "svelte", "react", "css", "backbone", "ember"];
let newCardsLogos = [];
let flippedCards = [];
let totalFlippedCards=0;
let totalPoints=0;

/************************************* Funções *************************************/
function reset(){    
    gameStarted.forEach(elemento => {   //Ciclo para esconder todos os elementos do gameStartes
        elemento.classList.add('hide') 
    });
 
    if(btLevel.value == 0){             //Se a opção selecionada for "Seleccione..."
        btPlay.disabled = true;         //Nao permitir que o botao seja clicado, antes de escolher o nivel
        panelGame.style.display = "none"; //Esconder o painel de jogo
        message.classList.add('hide'); //Esconder o texto "Clique em Iniciar o Jogo!"
      }else{
        btPlay.disabled = false;
        panelGame.style.display = "grid"; //Volta a mostrar o painel de jogo
        message.classList.remove('hide'); //Mostro o texto "Clique em Iniciar o Jogo!"
    }
}

function startGame(){
    totalPoints = 0;        //Sempre que se inicia um jogo, a pontuação volta a zero
    labelPoints.textContent = totalPoints;  //Atualiza no apinel a pontuação
    totalFlippedCards=0;    //Sempre que se inicia um jogo, as variaveis voltam ao ponto de incio
    flippedCards=[]         //Sempre que se inicia um jogo, as variaveis voltam ao ponto de incio
    btPlay.textContent = 'Terminar Jogo';   //Mudar o texto do botao
    btLevel.disabled = true;                //Não permitir que o utilizador troque o nivel de dificuldade 
    message.classList.add('hide');       //Esconder o texto "Clique em Iniciar o Jogo!"

    gameStarted.forEach(elemento => {       //Mostrar a pontução e tempo de jogo
        elemento.classList.remove('hide')
    });

    shuffleArray(cardsLogos);           //Baralhar o array

    newCardsLogos = cardsLogos.slice(0,3); //Cortar os 3 primeiros elementos
    newCardsLogos = newCardsLogos.concat(newCardsLogos);    //Duplica-los

    cards.forEach((card, index) => {
        card.style.order = Math.floor(Math.random() * cards.length) + 1; //Definir uma ordem aleatoria as cartas
        card.dataset.logo = newCardsLogos[index];
        card.addEventListener('click', flipCard, { once: true });  //Só pode ser clicada uma vez
    });

    cardsFront.forEach((card, index) => {
        card.src = "images/"+newCardsLogos[index]+".png";
    })

}

function flipCard() {
    this.classList.add('flipped');  //virar a carta
    flippedCards.push(this);        //Adicionar ao array o nome da carta
    if(flippedCards.length >= 2){   //Se ja tiver duas cartas viradas
      checkPair();      //vejo se é par
      flippedCards=[];  //deixo o array vazio
    }
}

function gameOver(){
    return totalFlippedCards === newCardsLogos.length;
}

function checkPair(){
    let [card1, card2] = flippedCards;

    if(card1.dataset.logo == card2.dataset.logo){
      card1.classList.add("inative");     //adiciona a classe inative (a carta fica sem se pode mexer)
      card2.classList.add("inative");     //adiciona a classe inative (a carta fica sem se pode mexer)
      card1.querySelector(".card-front").classList.add("grayscale");   //a carta fica em tom de cinza
      card2.querySelector(".card-front").classList.add("grayscale");   //a carta fica em tom de cinza
      totalFlippedCards += 2;       //forma viradas 2 cartas
      updatePoints('+');  //Atualiza a pontuação
      if (gameOver())   //Se o utilizador acabou o jogo, o jogo acaba
        stopGame();
    }else{
        setTimeout(() => { 
            card1.classList.remove('flipped');  //volta a virar a carta
            card2.classList.remove('flipped');  //volta a virar a carta
            card1.addEventListener('click', flipCard, { once: true });  //Só pode ser clicada uma vez
            card2.addEventListener('click', flipCard, { once: true });  //Só pode ser clicada uma vez
            updatePoints('-');  //Atualiza a pontuação
        }, 500);        
    }
}

function stopGame(){
    btPlay.textContent = 'Iniciar Jogo';   //Mudar o texto do botao
    btLevel.disabled = false;              //Voltar a permitir que o utilizador troque o nivel de dificuldade 
    reset();
    modalGameOver.style.display = 'block'; //Apresenta a janela de fim de jogo
    cards.forEach((card) => {
        card.classList.remove("inative");
        card.querySelector(".card-front").classList.remove("grayscale");
        card.classList.remove('flipped');
    });
}

const shuffleArray = array => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        const temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    } 
}

function updatePoints(operation) {
    operation === '+'
        ? totalPoints += ((newCardsLogos.length - totalFlippedCards)*2)
        : totalPoints < 2
            ? totalPoints = 0 
            : totalPoints -= 2;
    labelPoints.textContent = totalPoints;
    console.log(totalPoints);
}

/************************************* Event listeners *************************************/
reset(); //Quando a pagina é carregada chama o select e mostra a pagina por defeito

btLevel.addEventListener('change', reset); //Quando houver uma alteração à opção selecionada (change), é chamado o reset

btPlay.addEventListener('click', () => {   //Quando o botão Inciar/Terminar jogo for clicado
    if (btPlay.textContent == 'Terminar Jogo')
        stopGame();
    else
        startGame();
});

cards.forEach((card) => {                   //Fazer o card hover em JavaScript (anteriormente imprementado em css)
    card.addEventListener('mouseover', ()=> {
        card.classList.add('cardHover');
    });

    card.addEventListener('mouseout', ()=> {
        card.classList.remove('cardHover');
    });
});