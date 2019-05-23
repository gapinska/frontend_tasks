/*var x= function test(){
    return(document.write("test"));
};

//test() nie można wywołać tej funkcji, nie jest globalna

x() //funkcje można wywolac przez zmienna x

var x = function(){ //nazwa funkcji nie jest potrzebna w tym przypadku 
                    //funkcja anonimowa
    return(document.write("test"));
}

x()


function test(a, b){
    a(10, 9);
    
}

test(
    function(x,y){
        document.write("test of the function" + x);
        document.write("it works" + y),
    }
)
*/

/*
function test(a,b){
    a("additional text");
    b()
}

test(function(x){
    document.write("test of the function " + x);
}, function (){
    document.write("the second variable");
} )*/


function test(f,y){
    f(y+10)
}

test(function(x){
    document.write("hello"+x);
}, 20)

