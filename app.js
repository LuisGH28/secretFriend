// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function agregarAmigo(){
    let friend = document.getElementById('amigo').value;
    if (friend === "") {
        alert("Por favor inserta un nombre");
    } else {
        friends.push(friend);
        console.log(friends);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.textContent = friends[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * friends.length);
    let amigoSorteado = friends[indiceAleatorio];
    document.getElementById('resultadoSorteo').innerHTML = "Amigo sorteado: " + amigoSorteado;
}