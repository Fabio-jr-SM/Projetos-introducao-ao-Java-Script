let name


function clickButton_Demo() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!"
}

function clickButton_Demo_test() {
    document.getElementById("demo_test").style.fontSize = "30px"
}

function clickButton_Demo_test_2() {
    document.getElementById("demo_test_2").style.display = "none"
}

//window.open("https://github.com/Fabio-jr-SM","","width=900, height=600,menubar=no") Abre uma janela com o Link especificado


//Define a Saudacao de acordo com o horario
var date = new Date();
var hora = date.getHours();

if ((hora >= 00) && (hora <= 11)) {
    document.getElementById("saudacao").innerHTML = "Bom dia!!"
} else if ((hora >= 12) && (hora <= 17)) {
    document.getElementById("saudacao").innerHTML = "Boa tarde!!"
} else if ((hora >= 18) && (hora <= 23)) {
    document.getElementById("saudacao").innerHTML = "Boa tarde!!"
}

function functionPrompt(name) {
    name = window.prompt("Digite seu nome: ")
    document.getElementById("prompt").innerHTML = name
    document.getElementById("prompt").style.color = "blue"
}

function functionConfirm(name) {
    let opt = window.confirm("Deseja proseguir?")
    console.log(opt)

    if (opt === true) {
        alert("Você clicou em OK")
    } else {
        alert("Você clicou em Cancelar")
    }
}

function openClose() {
    var submenu = document.getElementById('time');
    var submenu2 = document.getElementById('time2');
    if (submenu.style.display == 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }

    if (submenu2.style.display == 'block') {
        submenu2.style.display = 'none';
    } else {
        submenu2.style.display = 'block';
    }
}