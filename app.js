// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// generar una lista
// introducir nombre a nombre en la caja de entrada
//realizar la operacion de randommath para que escoja a una de las personas de manera aleatoria
//que muestre el nombre de la persona que escogio
// cuando no se coloque ningun nombre que muestre un aviso que indique "colocar un nombre valido"
// que muestre el nombre de la persona que escogio aleatoriamente
// Array para guardar los nombres de los amigos
let amigos = [];

// Agregar personas
function agregarAmigo() {
    // revisar el nombre que se ha colocado
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // eliminar espacios en blanco, ya que puede afectar el codigo

    // esta rama es la que indica si no se ha agregado un nombre
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido."); // muestra la caja de texto con el aviso
        return;
    }

    // aqui agrega nombres a la lista
    amigos.push(nombreAmigo);
    inputAmigo.value = "";

    actualizarListaAmigos(); // aqui ya se va agregando a la lista de amigos
}

// Escribir los nombres agregados en la parte inferior del texto
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
    // agrega el nomnbre de la persona y le asigna un valor numerico para la randomizacion
}

// esta sección realiza la randomización
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Al tener cada nombre asociado a un valor numerico se realiza la randomizacion tomado el valor entero del mathrandom y multiplicando por el largo de la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSecreto = amigos[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
    // escribir el nombre de la persona que hha sido seleccionada en pantallla
    
}