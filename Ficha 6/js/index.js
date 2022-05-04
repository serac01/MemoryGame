'use strict';

/************************************* Defenir as variaveis da DOM *************************************/
const message = document.querySelector('#message');                 //Mensagem de iniciar jogo
const panelControl = document.querySelector('#panel-control');      //Painel de controlo para clicar em jogar, ver pontuação...
const panelGame = document.querySelector('#panel-game');            //Painel onde estão todas as peças para jogar
const btLevel = document.querySelector('#btLevel');                 //Botão para escolher a dificuldade do jogo
const btPlay = document.querySelector('#btPlay');                   //Botão para inciar/teminar o jogo
const gameStarted = document.querySelectorAll('.gameStarted');      //Esta associado a pontução e tempo de jogo
const cardsFront = document.querySelectorAll(".card-front");
const labelPoints = document.querySelector('#points');              //Label da pontuação
const labelGameTime = document.querySelector('#gameTime');          //Label do tempo
let cards = document.querySelectorAll(".card");                     //Guarda todas as cartas
const TIMEOUTGAME = 90;
let cardsLogos = ["angular", "bootstrap", "html", "javascript", "vue", "svelte", "react", "css", "backbone", "ember"];
let newCardsLogos = [];
let flippedCards = [];
let totalFlippedCards=0;
let totalPoints=0;
let timer;
let timerId;
let requiredCars
let topGamers = [ {nickname: 'Zé', points: 331 }, 
                  {nickname: 'Maria', points: 321 }]

/************************************* Funções *************************************/
function reset(){
    labelGameTime.removeAttribute('style'); //Repõe a cor do tempo
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
    createPanelGame();
}

function startGame(){
    timer = TIMEOUTGAME;
    timerId = setInterval(updateGameTime, 1000) 
    totalPoints = 0;        //Sempre que se inicia um jogo, a pontuação volta a zero
    labelPoints.textContent = totalPoints;  //Atualiza no apinel a pontuação
    totalFlippedCards=0;    //Sempre que se inicia um jogo, as variaveis voltam ao ponto de incio
    flippedCards=[]         //Sempre que se inicia um jogo, as variaveis voltam ao ponto de incio
    btPlay.textContent = 'Terminar Jogo';   //Mudar o texto do botao
    btLevel.disabled = true;                //Não permitir que o utilizador troque o nivel de dificuldade 
    message.classList.add('hide');       //Esconder o texto "Clique em Iniciar o Jogo!"

    getTopPoints();     //Apresenta a maior pontuação numa label

    gameStarted.forEach(elemento => {       //Mostrar a pontução e tempo de jogo
        elemento.classList.remove('hide')
    });

    shuffleArray(cardsLogos);           //Baralhar o array

    newCardsLogos = cardsLogos.slice(0,requiredCars/2);     //Cortar os 3 primeiros elementos
    newCardsLogos = newCardsLogos.concat(newCardsLogos);    //Duplica-los

    cards.forEach((card, index) => {
        card.style.order = Math.floor(Math.random() * cards.length) + 1; //Definir uma ordem aleatoria as cartas
        card.dataset.logo = newCardsLogos[index];
        card.addEventListener('click', flipCard, { once: true });  //Só pode ser clicada uma vez
    });
    console.log(newCardsLogos)
    
    cards.forEach((card, index) => {    //Adicionar as imagens a parte da frente da carta
        card.querySelector('.card-front').src = `images/${newCardsLogos[index]}.png`;
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
    clearInterval(timerId);                //O tempo é limpo
    document.querySelector('#messageGameOver').textContent = 'Pontuação: ' + totalPoints;   //Acrescenta o texto a modal
    btPlay.textContent = 'Iniciar Jogo';   //Mudar o texto do botao
    btLevel.disabled = false;              //Voltar a permitir que o utilizador troque o nivel de dificuldade 
    reset();
    modalGameOver.style.display = 'block'; //Apresenta a janela de fim de jogo
    cards.forEach((card) => {
        card.classList.remove("inative");
        card.querySelector(".card-front").classList.remove("grayscale");
        card.classList.remove('flipped');
    });

    checkTop10(totalPoints);
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
        ? totalPoints += (timer * (newCardsLogos.length / 2))
        : totalPoints < 5 ? totalPoints = 0 : totalPoints -= 5;
    labelPoints.textContent = totalPoints;
}

function updateGameTime() {
    timer--;                                    //Como definido em cima, o tempo decrementa de 1 em 1 segundo
    labelGameTime.textContent = timer + 's';    //Mostra o tempo
    if (timer < 11) labelGameTime.style.backgroundColor  = "red";
    if (timer == 0) stopGame();                 //Quando o tempo chega a 0 o jogo para
}

function createPanelGame() {
    panelGame.innerHTML = '';
    panelGame.className = "";
    
    let div = document.createElement('div');
    div.setAttribute('class', 'card');

    let imgBa = document.createElement('img');
    imgBa.setAttribute('src', 'images/ls.png');
    imgBa.setAttribute('class', 'card-back');
    
    let imgFront = document.createElement('img');
    imgFront.setAttribute('class', 'card-front');
    
    div.appendChild(imgBa);
    div.appendChild(imgFront);

    switch(btLevel.value){
        case "3": requiredCars=20; panelGame.classList.add("avancado"); break;
        case "2": requiredCars=12; panelGame.classList.add("intermedio"); break;
        default: requiredCars=6; panelGame.classList.add("basico");
    }

    for(let i=0; i<requiredCars; i++){
        let divClone = div.cloneNode(true);
        panelGame.appendChild(divClone)
    }

    cards = panelGame.childNodes;
}

function getTop10() {
    let infoTop = document.getElementById('infoTop'); //acede ao elemento da página cujo id é infoTop
    let div = document.createElement('div'); 
    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p'); 
    infoTop.innerHTML = '';     //Limpar a lista

    //Criar o cabeçalho
    p1.textContent = 'Nick Name'; 
    p2.textContent = 'Pontuação'; 
    div.appendChild(p1);
    div.appendChild(p2);
    
    //Apresentar todos os jogadores
    for (let i = 0; i < topGamers.length; i++) {     
        infoTop.appendChild(div.cloneNode(true));   //Criar a div  
        div.firstChild.textContent = `${topGamers[i].nickname}`; // Na 1º celula apresentar o nome
        div.lastChild.textContent = `${topGamers[i].points}`;    // Na ultima celula apresentar a pontuação
    }
    
    infoTop.appendChild(div);   //Acrescentar a informação a modal
}

function getTopPoints(){
    let pointsTop = document.getElementById('pointsTop');   //Obtem a label para mostrar a maior pontuação
    pointsTop.innerHTML= `${topGamers[0].points}`;          //vai ao array e apresenta a primeira pontuação
}

function getLastPoints(){
    return topGamers[topGamers.length-1].points;
}

function checkTop10(totalPoints){
    let nick = document.getElementById('nickname');

    if(topGamers.length < 10 || totalPoints > getLastPoints()){
        nick.style.display = 'block';
        messageGameOver.innerHTML += "<br>Parabéns! Entrou no Top 10";  //Acrescentar este texto
    }
}

function saveTop10(){
    let inputNick = document.getElementById('inputNick').value; //Obtem o nickname, acedendo ao valor do elemento com id inputNick
    const novosPontos = {nickname: inputNick, points: totalPoints}; //Cria um objecto com o nickname e pontuação    
    let userExists = false;
    
    localStorage.setItem('Nickname', inputNick);    

    //Se o jogador existe guarda a melhor pontuação dele
    topGamers.forEach((gamer,index) =>{
        if(gamer.nickname === inputNick){
            userExists = true;
            topGamers[index].points = totalPoints;
        }
    })

    if(userExists === false)    //Se o jogador nao existir, ascrescenta ao array
        topGamers.push(novosPontos);
    
    topGamers.sort(function (a, b) { return b.points - a.points }); //Ordena o array

    if(topGamers.length > 10)   //Se existir mais do que 10 elimina o ultimo que esta a mais
        topGamers.pop();

    localStorage.setItem(topGamers, JSON.stringify({nickname:nickname, points: totalPoints}));

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

btTop.addEventListener('click', function () { getTop10(); });

okTop.addEventListener('click', function(){
    saveTop10();
    modalGameOver.style.display = "none";
    reset();
});

//Função apenas chamada uma vex (IIFE)
(function getLocalStorage(){
    localStorage.getItem('nickname');
    localStorage.getItem(topGamers);
})();