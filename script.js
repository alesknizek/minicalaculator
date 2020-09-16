
function calc(select){
    var x = document.getElementById("text1");
    var y = document.getElementById("text2");
    z = document.getElementById("select").value;

    if(z == 0){
        console.log(x + y);
        document.getElementById("vysledek").innerHTML = x + y;
    }else if(z == 1){
        console.log("x - y");

    }else if(z == 2){
        console.log("x * y");

    }else if(z == 3){
        console.log("x / y");
    } 
}