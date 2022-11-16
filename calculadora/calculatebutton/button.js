
const name = document.querySelector(".result");

function calculadora() {
    var n1 = parseInt(prompt("digite um número"))
    var n2 = parseInt(prompt("digite outro número"))

    som = "A soma é : " + n1 + " + " + n2 + " = " + (n1 + n2)
    sub = "A subtração é : " + n1 + " - " + n2 + " = " + (n1 - n2)
    div = "A divisão é : " + n1 + " / " + n2 + " = " + (n1 / n2)
    mul = "A multiplicação é : " + n1 + " x " + n2 + " = " + (n1 * n2)

    document.getElementById("soma").innerHTML = som
    document.getElementById("subtração").innerHTML = sub
    document.getElementById("divisão").innerHTML = div
    document.getElementById("multiplicação").innerHTML = mul
}

function somar() {
    var n1 = parseInt(prompt("digite um número"))
    var n2 = parseInt(prompt("digite outro número"))

    som = "A soma é : " + n1 + " + " + n2 + " = " + (n1 + n2)
    document.getElementById("soma").innerHTML = som
}
function subtração() {
    var n1 = parseInt(prompt("digite um número"))
    var n2 = parseInt(prompt("digite outro número"))

    sub = "A subtração é : " + n1 + " - " + n2 + " = " + (n1 - n2)
    document.getElementById("subtração").innerHTML = sub
}
function divisão() {
    var n1 = parseInt(prompt("digite um número"))
    var n2 = parseInt(prompt("digite outro número"))

    div = "A divisão é : " + n1 + " / " + n2 + " = " + (n1 / n2)
    document.getElementById("divisão").innerHTML = div
}   
function multiplicação() {
    var n1 = parseInt(prompt("digite um número"))
    var n2 = parseInt(prompt("digite outro número"))

    mul = "A multiplicação é : " + n1 + " x " + n2 + " = " + (n1 * n2)
    document.getElementById("multiplicação").innerHTML = mul
}
function limpar() {
    document.getElementById("div").innerHTML = ""
}