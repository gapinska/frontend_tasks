/*
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem*/
function print_text(a){
  console.log(a);
}


/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear Jan Nowak!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */
    var greeting = function (firstName, lastName){
      console.log('Hello my dear '+firstName+' '+lastName+'!')
    }

    function greeting (firstName, lastName){
      console.log('Hello my dear '+firstName+' '+lastName+'!')
    }

/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */
function greetingAgain(){
  console.log('Hello my dear '+firstName+' '+lastName+'! '+ 'I love you!')
}
// TODO: 4. Opakuj kod z tego pliku w IIFE.

(function greetingAgain(){
  console.log('Hello my dear '+firstName+' '+lastName+'! '+ 'I love you!')
})()
// TODO: 5. Stwórz interwał, ktory co 1 wyswietli w konsoli console.log("Hello!"). Dodatkowo, po 5 sekundach interwal powinien przestac pracowac
// nalezy wykorzystac funkcje setInterval, clearInterval, setTimeout





var greeting= function(){
  console.log("Hello!");
}
var intervalID = setInterval(greeting,1000); 

setTimeout(function(){
  clearInterval(intervalID);
}, 5000);