// JavaScript source code
var productos = [
    { producto: "Camiseta", precio: "$19.99" },
    { producto: "Short", precio:"$5.50" },
    { producto: "Terreneitor", precio: "$1000.00" },
    { producto: "Telefono", precio: "$199.99" },
    { producto: "Café", precio: "$1.00" },
    { producto: "Taza", precio: "$5.00" },
    { producto: "Cuchara", precio: "$1.50" },
    { producto: "Agua caliente 400ml", precio: "$1.33" },
    { producto: "Pan", precio: "$0.25" },
    { producto: "Azucar", precio: "$2.00" },
]

for (var i = 0; i < productos.length; i++) {
    document.getElementById("productoT").innerHTML += "<tr>" + "<td>" + productos[i].producto + "</td>" + "<td>" + productos[i].precio + "</td>" + "</tr>";
}
