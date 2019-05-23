var myBody= document.getElementsByTagName("body");
myBody[0].innerHTML; //return the whole HTML content
myBody[0].innerHTML= <p>I am a paragraph</p>;
//change the whole content

var myTitle = document.getElementById("page-title");
//id means there is only one id element on the website

myTitle.textContent= "Yo Ninjas!" //It changes the text content
/*

innerHTML and tectContent they are properties not methods it's possible to write it as: 
textContent=
innerHTML=


*/