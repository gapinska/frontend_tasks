/*
<a href="/Subjects" id=test" class="ninja">Subjects</a>
*/

var link= getElementById("test"); //the whole link

link.getAttribute("href");
//"/Subjects"

link.getAttribute("class");
//"ninja"

link.setAttribute("class", "pie");
//change "ninja" into "pie"

//add a new attribute:
link.setAttribute("attribute", "value");

link.className;
link.className= "ninja";//change it again


