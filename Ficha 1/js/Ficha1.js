'use strict';

/***** Exercicio 1 (A) *****
let n1=3; 
let n2=6; 
let n3; 
console.log(n1+n2);                                                 // calcula n1+n2     = 9
console.log(n1+"n3");                                               // concatena n1+"n3" = 3n3
console.log(n1+"5");                                                // concatena n1+"5"  = 35
console.log(n1+"n2");                                               // concatena n1+"n2" = 3n2
console.log(n1+n3);                                                 // calcula n1+n3     = 9
console.log(n3);                                                    // mostra n3         = undefined
console.log(`Variavel n1*n2 = ${n1*n2} ( n1=${n1} e n2=${n2})`);    // mostra            = Varivel n1*n2 = 18 (n1=3 e n2=6)
n3=n1+n2;                
console.log(n3);        // mostra n3         = 9
n3=n1+"---"+n2;          
console.log(n3);        // mostra n3         = 3---6
n3="6";          
console.log(n1+n3);     // mostra n1+n3      = 36
console.log(n2===n3);   // False 
console.log(n2==n3);    // True 
console.log(n2!==n3);   // True 
console.log(n2!=n3);    // False 
console.log(n1++);      // mostra n1         = 3
console.log('n1='+n1);  // mostra 'n1='+n1   = n1=4
n1=4;    
console.log(++n1);       // mostra n1        = 5
console.log('n1='+n1);   // mostra n1        = 5
*/

/***** Exercicio 1 (B) *****
let variavel; 
variavel = '3' + 2;
console.log(variavel)           // mostra variavel      = 32 
variavel = '3' + true; 
console.log(variavel);          // mostra variavel      = 3true
variavel = '3' + undefined; 
console.log(variavel);          // mostra variavel      = 3undefined
variavel = '3' + null; 
console.log(variavel);          // mostra variavel      = 3null
*/

/***** Exercicio 1 (C) *****
//Existe algum erro no seguinte trecho de código? 
const disciplina; 
disciplina="Linguagens Script"; 
console.log(Disciplina);
//R: Sim, não é possivel criar uma variavel const sem ser inicializada, e na linha seguinte nao posso alterar uma variavel do tipo const.
*/

/***** Exercicio 1 (D) *****
//O que é apresentado na consola? Algum erro? 
let uc='Linguagens'; 
uc+='Script'; 
console.log('Disciplina:'+uc +'- 2 semestre');
//R: Nao existe nenhum erro, ao contrario das varivaeis const eu posso alterar as variaveis let
*/

/***** Exercicio 1 (E) *****
//Faça o mesmo procedimento para o seguinte bloco de código. 
const nome1='Nuno' 
const nome2='Ricardo' 
const resultado = `Os nomes são ${nome1} e  ${nome2}` 
console.log(resultado); 
console.log(resultado+' e Filipe');
//R: Nao existe nenhum erro, na consola é apresentado "Os nomes sao Nuno e Ricardo" e "Os nomes sao Nuno e Ricardo e Filipe"
*/

/***** Exercicio 2 (A) *****
//Implemente o código para calcular o maior de três números, devendo apresentar na consola a mensagem “O maior entre __,__ e _ é __”.
const num1=prompt("Especifique o numero 1: "); 
const num2=prompt("Especifique o numero 2: ");
const num3=prompt("Especifique o numero 3: ");

console.log(`O maior numero entre ${num1} ${num2} e ${num3} é ` + Math.max(num1, num2, num3))*/

/***** Exercicio 2 (B) *****
//Implemente o código necessário para efetuar a soma de todos os números entre dois valores. Esses dois valores devem 
//ser inicializados no inicio do programa. Por fim, o programa deverá apresentar a soma obtida
function serie(num1, num2) {
    let num3 = 0, maior, menor;

    if(num1>num2){ maior=num1; menor=num2; }
    else{ maior=num2; menor=num1; }

    for (let i = menor; i <= maior; i++)
        num3 += i;
    return (num3);
}

let num1=prompt("Primeiro numero: "); 
let num2=prompt("Segundo numero: ");

num1 = parseInt(num1); //Converter texto para inteiros
num2 = parseInt(num2); //Converter texto para inteiros

alert(`Soma entre ${num1} ${num2} e `+serie(num1,num2));*/

/***** Exercicio 2 (C) *****
//Implemente  o  código  necessário  para  somar  todos  os  números  positivos  obtidos  do  utilizador. Quando o valor
//introduzido for 0, o programa termina e apresenta uma mensagem com a soma total e o número de números introduzidos.
let num1 = 0, i = 1, sum = 0;

while (num1 = parseInt(prompt(i+ "º número para somar:"))) {
    if (0 < num1)
        sum += num1;
    i++;
}

alert('A soma dos ' + i + ' numeros é ' + sum)*/

/***** Exercicio 3 (A) *****
let str = 'Linguagens Script'; 
function fazQualquerCoisa() { 
    console.log(str); 
} 
fazQualquerCoisa();
//R: O output é Linguagens Script
*/

/***** Exercicio 3 (B) *****
let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    str = 'Script'; 
} 
console.log(str); 
fazQualquerCoisa(); 
console.log(str);
//R: O output é Linguagens \n Script
*/

/***** Exercicio 3 (C) *****
function fazQualquerCoisa() { 
    str = 'Script'; 
} 
fazQualquerCoisa(); 
console.log(str);
//R: Com o use strict dá erro porque nao conhece str, sem o use strict o programa funciona normalmente
*/

/***** Exercicio 3 (D) *****
function fazQualquerCoisa() { 
   let str = 'Script'; 
} 
fazQualquerCoisa(); 
console.log(str);
//R: Com o use strict dá erro porque nao conhece str, sem o use strict o programa funciona normalmente
*/

/***** Exercicio 3 (E) *****
let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    let str2 = ' Script'; 
    console.log(str+str2); 
} 
fazQualquerCoisa(); 
console.log(str+str2);
//R: Consegue fazer o console.log da função, mas nao consegue fazer o console.log do programa principal por causa do use strict
*/

/***** Exercicio 3 (F) *****
let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    let str2 = ' Script'; 
     
    if (str.length > str2.length) { 
        let dim="Primeira é maior!" 
        console.log(dim); 
    } 
    else if (str.length === str2.length) { 
        let dim="São iguais!" 
        console.log(dim); 
    } 
    else { 
        let dim="Segunda é maior!" 
        console.log(dim); 
    } 
 
    console.log(str+str2+"-"+dim); 
} 
fazQualquerCoisa();
//R: O programa entra no primeiro if, faz o console.log, mas não consegue fazer o ultimo console.log por causa dim estar defenido no if
*/

/***** Exercicio 3 (G) *****
var str = 'Linguagens'; 
function fazQualquerCoisa() { 
    var str2 = ' Script'; 
    if (str==='Linguagens') { 
        var dim='ok'; 
        console.log("->"+dim); 
    } 
    console.log(str+str2+"- "+dim); 
} 
fazQualquerCoisa(); 
console.log(str+str2);
//R: faz o console.log do if na função, e o console.log da função porque var é variavel gloval, mas nao consegue fazer o ultimo console.log por causa do use strict
*/

/***** Exercicio 3 (H) *****
console.log(str) 
var str;
//R: a variavel é global por e defenida previamente logo, nao ocorre nenhum erro, se fosse let já dava erro
*/

/***** Exercicio 3 (I) *****
console.log(str) 
var str='Linguagens Script';
//R: a variavel é global por e defenida previamente logo, mas como undefined, se fosse let já dava erro
*/

/***** Exercicio 3 (J) *****
str='Linguagens Script'; 
console.log(str) 
var str;
//R: a variavel é global por e defenida previamente logo, não ocorre nenhum erro, se fosse let já dava erro
*/

/***** Exercicio 3 (K) *****
function fazQualquerCoisa() { 
    console.log(str); 
} 
fazQualquerCoisa(); 
var str = 'Linguagens'; 
//R: faz o console.log, mas nao imprime o conteudo por causa do use strict
*/

/***** Exercicio 3 (L) *****
var str="Linguagens" 
function fazQualquerCoisa() { 
    str2="Script" 
    console.log(str2); 
    var str2; 
} 
fazQualquerCoisa(); 
console.log(str2); 
//R: faz o console.log na função escrevendo "Script", mas nao imprime o conteudo do 2º log porque var é apenas defenido da função
*/

/***** Exercicio 3 (M) *****
function mensagem() { 
    let nome='José'; 
    console.log(`Olá ${nome}`); 
} 
mensagem();  
mensagem('Maria');  
mensagem('Maria','Jose','Vieira');
//R: apenas faz a primeira função e ignora as outras 2
*/

/***** Exercicio 3 (N) *****
mensagem();  
function mensagem() { 
    let nome='José'; 
    console.log(`Olá ${nome}`); 
}
//R: chama a função e imprime na consola "ola jose"
*/

/***** Exercicio 3 (O) *****
function mensagem(nome='!') { 
    console.log(`Olá ${nome}`); 
} 
mensagem();  
mensagem('Maria');  
mensagem('Jose');  
mensagem('Cristiana','Areias'); 
//R: consegue fazer a chamada de todas as funções, escrevendo "Olá !", "Olá Maria", "Olá Jose", "Olá Cristiana"
*/

/***** Exercicio 4 (A) *****
//Implemente  a  função  compara  que  verifique  se  dois números  são  iguais. Deve  retornar  true  se
//forem iguais e false caso contrário. Implemente a função com e sem recurso ao operador ternário.
function compara(a, b) {
    return a == b? true : false;
}

function compara(a, b) {
    if (a == b)
        return true;
    else
        return false;
}*/

/***** Exercicio 4 (B) *****
//Implemente a função parOuImpar que, recebendo como parâmetro um valor, escreva na consola  se o número é par ou impar. Use o operador %
function parOuImpar(a) {
    if (a % 2 == 0)
        console.log("O número é par!");
    else
        console.log("O número é ímpar!");
}*/

/***** Exercicio 4 (C) *****
//Implemente uma função maior que devolva o quadrado de um valor
function obtemQuadrado(a) {
    return a**2;
}*/

/***** Exercicio 4 (D) *****
//Implemente uma função maior que devolva a área e um retângulo. Se for passado apenas um valor, 
//então, os dois valores devem ser considerados iguais. Resolva sem recorrer a qualquer if
function areaRetangulo(a, b=a) {
    return a * b;
}*/

/***** Exercicio 4 (E) *****
//Implemente  a  função  contavogais  que  receba  por  parâmetro  uma  string  e  devolva  o  número  de 
//vogais existentes nessa string.  Pode  recorrer aos métodos  charAt(), toLowerCase() , métodos 
//estes que permitem verificar o que se encontra numa determinada posição do caracter e converter 
//tudo para minúsculas, respetivamente
function contaVogais(str1) {
    let ocorrencias = 0;
    const str2 = str1.toLowerCase();
    for (let i = 0; i < str2.length; i++)
        if ("aeiou".includes(str2.charAt(i)))
            ocorrencias++;
    return (ocorrencias);
}*/

/***** Exercicio 5 (A) *****
//O seguinte código apresenta a criação de um array (literal) de 6 elementos, no qual é apresentado 
//na consola, o primeiro elemento do array, o texto angular. Implemente o código para que escreva 
//todos os elementos do array, recorrendo a um ciclo for.
const palavras=['angular','bootstrap','javascript','vue','svelte','react'];
for (let i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
}*/

/***** Exercicio 5 (B) *****
//Implemente  a função  ImprimeArray que  recebe  por parâmetro um  array de  strings e  imprima os elementos desse array na consola
function imprimeArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}*/

/***** Exercicio 5 (C) *****
//Resolva o exercício anterior, recorrendo agora ao for... of.
function imprimeArray(array) {
    for (elemento of array) {
        console.log(elemento);
    }
}*/

/***** Exercicio 5 (D) *****
//Resolva o exercício anterior, recorrendo agora ao foreach.
const palavras=['angularr','bootstrap','javascript','vue','svelte','react'];
palavras.forEach(imprimeArray); //Envia palavra a palavra
function imprimeArray(el) {
    console.log(el);    
}*/

/***** Exercicio 5 (E) *****
//Implemente código de forma a que adicione um novo elemento ao array, o elemento ‘backbone’.  
const palavras=['angular','bootstrap','javascript','vue','svelte','react'];
palavras[6] = 'backbone';
palavras.forEach(imprimeArray);
function imprimeArray(el, index, arr) {
   console.log(el);
}*/

/***** Exercicio 5 (F) *****
//Existe um conjunto de métodos  built-in que  permitem a manipulação de elementos de  um array, 
//entre eles o push() e o unshift() que permitem adicionar de forma simples novos elementos no 
//array. Teste estes métodos, adicionando os elementos ember e css ao array.  
//Por forma a verificar o que  aconteceu, imprima o array  na consola recorreno à função usada nas 
//alíneas anteriores. Dica:  nomearray.push('ember');
const palavras=['angular','bootstrap','javascript','vue','svelte','react'];
palavras.push('backbone')
palavras.unshift('frontbone')
palavras.forEach(imprimeArray);
function imprimeArray(el, index, arr) {
   console.log(el);
}*/

/***** Exercicio 5 (G) *****
//Analise o comportamento dos seguintes métodos pop()  e  shift(),  usando os arrays anteriormente definidos.
//R: O pop remove o ultimo elemento e o shift remove o primeiro 
*/

/***** Exercicio 5 (H) *****
//Ordene o array palavras por ordem alfabética, recorrendo ao método sort().
palavras.sort()*/

/***** Exercicio 5 (I) *****
//Analise o seguinte trecho de código e anteveja o que aparece na consola do browser.  Depois, copie 
//o código e verifique o resultado.
const palavras1=['css','html']; 
const palavras2=['angular','bootstrap','javascript']; 
const palavras3=['vue','svelte','react']; 
function fazQualquerCoisa(...arr) { // não é erro  
    for (let i=0; i <arr.length;i++)
        for (let j=0; j<arr[i].length;j++) 
            console.log(arr[i][j]);
    console.log('---FIM-----'); 
} 
fazQualquerCoisa(palavras1);                        //mostra palavras1
fazQualquerCoisa(palavras1,palavras2);              //mostra palavras1, palavras2
fazQualquerCoisa(palavras1,palavras2, palavras3);   //mostra palavras1, palavras2 e palavras3
*/

/***** Exercicio 5 (J) *****
//Implemente a função somatorio que calcule o somatório de um conjunto de números, passados por parâmetro
function somatorio(...arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++)
        soma += i;
    return soma;
}*/

/***** Exercicio 5 (K) *****
//Analise o seguinte código e anteveja o que aparece na consola do browser. Depois, copie o código 
//e verifique o resultado. Esclareça as suas dúvidas
let vogais = ['a','e','i','o','u'];
let letras = vogais;
letras.push('X');

console.log(vogais); // Escreve apenas vogais ou vogais + X ? Escreve vogais + X
console.log(letras); // Escreve apenas vogais ou vogais + X ? Escreve vogais + X

let letra ='Z';
let letraZ = letra;
letra='Y';

console.log(letra);  // Escreve Z ou Y? Escreve 'Y'
console.log(letraZ); // Escreve Z ou Y? Escreve 'Z'
*/

/***** Exercicio 5 (L) *****
//O  método  map  permite  efetuar  alguma  operação  em  cada  um  dos  elementos  de  um  array  e 
//transformá-lo num novo array. Nesse sentido, implemente código que permita criar um novo array, 
//onde  além  de  apresentar  o  nome  das  palavras,  também  deve  apresentar  a  sua  posição  no  array 
//como se apresenta no arr_final 
//Nota: Não se pretende que recorra a qualquer ciclo while, for, foreach, do.. while.
let original=['angular','bootstrap','javascript','vue','svelte','react'];
let final = original.map(mudaStringMap);

function mudaStringMap(valorAtual,indice) {
    return '['+ indice+']='+valorAtual;
}

console.log(final)*/

/***** Exercicio 5 (M) *****
//Seguindo  o  raciocínio  da  alínea  anterior,  implemente  o  código  necessário  para  que  o  array  final 
//apenas  inclua  palavras com  menos  que  7  caracteres,  como  apresentado  de  seguida.  Tal  como  na 
//alínea anterior, não se pretende que implemente com recurso a qualquer ciclo for, while, foreach... 
//  1) Implemente com recurso ao método filter 
//  2) Implemente com recurso ao método reduce
function isLargeEnough(value){
    return (value.length < 7);
}

var myFirstArrowFunction = (acc, curr) => {
    if (curr.length < 7) acc.push(curr);
    return acc;
};

let original=['angular','bootstrap','javascript','vue','svelte','react'];
//Alinea 1
let final = original.filter(isLargeEnough);
//Alinea 2
let final = original.reduce(myFirstArrowFunction, [])

console.log(final);*/
