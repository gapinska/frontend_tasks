/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

 if (developer === 'junior js dev'){
     console.log("Cześć, jestem junior devem!")
 }else{
     console.log("Jednak nie junior dev:( ")

 }

/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */
if (yourAge>= 67){
    console.log("Czas na emeryturę!")
}else if (yourAge<67 && yourAge>33){
    console.log("Średni wiek!")
}else if (yourAge<=33 && yourAge>18){
    console.log("Czas na emeryturę!")
}else{
    console.log("Hej młodziaku!")
}




/* TODO.3: Napisz funkcję, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */


 function checkType(skill){if (skill==='javaScript' || skill==='HTML' || skill==='CSS'){
     return true;}else{return false;}}
 

/* TODO.4: Napisz funkcję, która przyjmuje jako parametr stringa i zwraca true jeśli:
 - wartość przyjętego parametru jest różna od słowa JavaScript
 */
function checkWord(word){
    if (word!=='JavaScript'){
        return true;
    } else{
        return false;
    }
}

/* TODO.5: Napisz funkcję isShopOpen, która przyjmuje jako parametr liczbę i zwraca true jeśli:
 - wartość parametru jest mniejsza niż 23 i większa od 6
 */
function isShopOpen(a){
    if (a<23 && a>6){
        return true;
    }else{
        return false;
    }
}


/* TODO.6: Wykorzystując funkcję isShopOpen i negację (!), napisz funkcję isShopClosed
    - która zwraca true, jeśli sklep jest zamknięty (czyli neguje wartość zwróconą z isShopOpen)
 */

function isShopClosed(){
    if (isShopOpen!==true){
        return true
    }else{
        return falce
    }
}


/* TODO.7: Wykorzystując SWITCH, napisz funkcję, która jako parametr przyjmuje stringa o nazwie day i:
 - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
 - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
 - ma być 7 warunków (7 dni)
 - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 */

 switch(day){
    case "Monday":
         console.log("Monday");
         break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("The day like this does not exist!");
 }


 

/* TODO.8: Wykorzystując TERNARY OPERATOR:
    - przypisz do zmiennej price wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';
        czy
  */

  if (age>=18){
      console.log("you are adult")
  }else{
      console.log("you are not adult")
  }

  

console.log((age>=18)?"you are adult":"you are not adult" )


console.log((isMember===true)? price='2.00$':price='10.00$')