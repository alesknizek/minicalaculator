
function calc(){
    var x = document.getElementById("text1");
    var y = document.getElementById("text2");
    z = document.getElementById("select").value;

    if(z == 0){
        console.log("x + y");
        document.getElementById("vysledek").innerHTML = x + y;

    }else if(z == 1){
        console.log("x - y");
        document.getElementById("vysledek").innerHTML = x - y;

    }else if(z == 2){
        console.log("x * y");
        document.getElementById("vysledek").innerHTML = x * y;

    }else if(z == 3){
        console.log("x / y");
        document.getElementById("vysledek").innerHTML = x / y;
    } 
}

function zmena(){
    console.log("zmena");
    var x = document.getElementById("text3");
    var y = document.getElementById("text4");
    document.getElementById("zmena").innerHTML = x * y;
}