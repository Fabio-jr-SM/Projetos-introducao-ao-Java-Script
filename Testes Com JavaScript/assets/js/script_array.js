function arrayVetor() {
    const newVetor = new Array(4);

    newVetor[0] =  document.getElementById("input1").value
    newVetor[1] =  document.getElementById("input2").value
    newVetor[2] =  document.getElementById("input3").value
    newVetor[3] =  document.getElementById("input4").value

    //console.log(newVetor[0])

    document.getElementById("indice0").innerHTML = "Indice 0: " + newVetor[0]
    document.getElementById("indice1").innerHTML = "Indice 1: " + newVetor[1]
    document.getElementById("indice2").innerHTML = "Indice 2: " + newVetor[2]
    document.getElementById("indice3").innerHTML = "Indice 3: " + newVetor[3]

    document.getElementById("hr").style.display = "block"
    document.getElementById("hr1").style.display = "block"
    document.getElementById("hr2").style.display = "block"
    document.getElementById("hr3").style.display = "block"
}
