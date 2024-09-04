// JavaScript source code
function calcularNota() {
    var primerNota = document.getElementById("nota1");
    var segundaNota = document.getElementById("nota2");
    var tercerNota = document.getElementById("nota3");

    var total = (+primerNota.value + +segundaNota.value + +tercerNota.value) / 3;
    var totalRedondeado = Math.round(total * 100) / 100;

    document.getElementById("promedio").value = totalRedondeado;
}

/*function calcularNota() {
    var primerNota = document.getElementById("nota1");
    var segundaNota = document.getElementById("nota2");
    var tercerNota = document.getElementById("nota3");

    var total = (parseFloat(primerNota.value) + parseFloat(segundaNota.value) + parseFloat(tercerNota.value)) / 3;

    document.getElementById("promedio").value = total.toFixed(2);
    }*/