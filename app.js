let ingresarAmig = document.getElementById("amigo");
let amigos = [];
let lista = document.getElementById("listaAmigos");
let result = document.getElementById("resultado");

function agregarAmigo(){
    if (ingresarAmig == "")
        alert("Por favor, inserte un nombre.")
    else {
        amigos.push(ingresarAmig.value);
        lista.innerHTML += `<li>${ingresarAmig.value}</li>`;
    }
    limpiarCaja();
}
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}
function sortearAmigo() {
    let aleatorio = Math.floor(Math.random() * amigos.length);
    let secreto = amigos[aleatorio];
    result.innerHTML = `<li>Tu amigo secreto es: ${secreto}.</li>`;
}
