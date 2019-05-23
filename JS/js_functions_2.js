/*function sum(a,b){
    return a+b;
}
document.write(sum(5,6))

function devide(c,d)
{
    if (d==0){
        return("Can't devide by 0");
    }else{
        return(c/d);
    }
}
document.write(devide(4,0))*/

var a = 5;

function test(a){

    a=4;
    return a;
}

document.write(test());
document.write(a);
a= test(a);
document.write(a);
