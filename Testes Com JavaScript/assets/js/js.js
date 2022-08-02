
function clickButton_Demo() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!"
}

function clickButton_Demo_test() {
    document.getElementById("demo_test").style.fontSize = "30px"
}

function clickButton_Demo_test_2() {
    document.getElementById("demo_test_2").style.display = "none"
}

//window.open("https://github.com/Fabio-jr-SM","","width=900, height=600,menubar=no") Abre uma Janela com o Link especificado


//Define a Saudação de acordo com o horario
var date = new Date();
var hora = date.getHours();

if ((hora >= 00) && (hora <= 11)) {
    document.getElementById("saudacao").innerHTML = "Bom dia!!"
} else if ((hora >= 12) && (hora <= 17)) {
    document.getElementById("saudacao").innerHTML = "Boa tarde!!"
} else if ((hora >= 18) && (hora <= 23)) {
    document.getElementById("saudacao").innerHTML = "Boa tarde!!"
}

