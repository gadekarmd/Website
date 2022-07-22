var a = "4"

a = 4

if (a === b) {

    console.log("== is true")
} else {

    console.log("=== is flase")
}


function add() {

    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    document.getElementById("add").innerHTML = Number(a) + Number(b);
}