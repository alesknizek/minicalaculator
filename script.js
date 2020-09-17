
function calc(){
    var x = document.getElementById("text1").value;
    var y = document.getElementById("text2").value;
    z = document.getElementById("select").value;

    if(z == 0){
        console.log("x + y");
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById("vysledek").innerHTML = x += y;

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
    var x = document.getElementById("text3").value;
    var y = document.getElementById("text4").value;
    y = parseInt(y);
    document.getElementById("text5").innerHTML = x * y;
}