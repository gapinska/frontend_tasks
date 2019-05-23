var myCar={
    maxSpeed: 70,
    driver: "Net Ninja",
    
    drive: function(speed, time){
        console.log(speed, time);
    },

    logDriver: function(){
        console.log("driver name is" + this.driver);
    }

}

var Car = function(maxSpeed, driver){

}

var myCar= new Car(50, "ninja")

/*function youSayGoodbye(){

    document.write("Do widzenia!");

    function andISayHello(){
        document.write("Witaj");
    }
    return andISayHello();

}

youSayGoodbye()*/


