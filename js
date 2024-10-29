let letraSeleccionada;
let preguntas = [
    "Escribe un nombre",
    "Escribe un apellido",
    "Escribe una ciudad",
    "Escribe una marca comercial",
    "Escribe una comida"
];
let respuestas = [];
let startTime;

// Función para seleccionar una letra aleatoria y reiniciar el juego
function iniciarJuego() {
    letraSeleccionada = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Letra aleatoria
    document.getElementById("letraSeleccionada").textContent = letraSeleccionada;
    document.getElementById("preguntas").innerHTML = "";
    respuestas = [];
    startTime = new Date();

    preguntas.forEach((pregunta, index) => {
        let preguntaHTML = `
            <p>${pregunta} (debe empezar con ${letraSeleccionada}):</p>
            <input type="text" id="respuesta${index}" placeholder="Respuesta">
            <button onclick="verificarRespuesta(${index})">Verificar</button>
            <p id="mensaje${index}" style="color: red;"></p>
        `;
        document.getElementById("preguntas").insertAdjacentHTML("beforeend", preguntaHTML);
    });

    document.getElementById("resultado").textContent = "";
}

// Función para verificar si la respuesta es correcta
function verificarRespuesta(index) {
    const respuesta = document.getElementById(`respuesta${index}`).value.trim();
    const mensaje = document.getElementById(`mensaje${index}`);

    if (respuesta && respuesta[0].toUpperCase() === letraSeleccionada) {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Correcto!";
        respuestas[index] = respuesta;

        if (respuestas.length === preguntas.length && !respuestas.includes(undefined)) {
            finalizarJuego();
        }
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "La respuesta debe comenzar con la letra seleccionada. Inténtalo nuevamente.";
    }
}

// Función para finalizar el juego y mostrar el tiempo transcurrido
function finalizarJuego() {
    const endTime = new Date();
    const timeDiff = ((endTime - startTime) / 1000).toFixed(2);
    document.getElementById("resultado").textContent = `¡Perfecto, has terminado! Tiempo: ${timeDiff} segundos`;
}
