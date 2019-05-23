document.write("Hello!");

for(var i=1; i<=5; i++){

    console.log("loop's nr: "+ i);

    if(i===4){
        break;
    }
}

for(var i=1; i<=10; i++){

    if(i===3 || i===5){

        continue;
    }

    console.log("loop's nr: "+ i);

    if(i===7){
        break;
    }
}