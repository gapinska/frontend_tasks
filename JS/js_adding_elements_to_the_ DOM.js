//js_adding_elements_to_the_DOM

var newLi = document.createElement("li");
var newA = document.createElement("a");

var menu= document.getElementById("main-nav").getElementsByTagName("ul")[0];
menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML= "Blog";
menu.insertBefore("newLI", menu.getElementsByTagName("li")[0]);//put this at the top of the list

