/*
constructor function - nazwa- wielka litera
służy do tworzenia obiektów*/

var Car = function(maxSpeed, driver){
    this.maxSpeed= maxSpeed;
    this.driver= driver;
    this.drive= function(speed, time){
        document.write(speed*time);
    };
    this.logDriver= function(){
        document.write("driver name is" + this.driver);
    }


}

//wywołanie funkcji

var myCar= new Car(70, "Shaun");
var myCar1= new Car(50, "Chris");
var myCar2= new Car(150, "Chrisopher");

myCar.drive(100,40);
document.write(myCar.maxSpeed);

