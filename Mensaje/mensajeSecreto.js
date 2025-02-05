let mensaje = "EstE meNSAjE SirVE para probar COMO NUESTRAS MentES PUedeN hACER cosAS MARAvilloSAS! coSAS ImPreSIONAntES! AL COMIENZO ERA UN pOCO DiFicIL pero ahora, EN esta LINEA tu mente esta LEyenDOLO auTOMAticamente sin SIQUIEra pensarlo.";
let nuevo = mensaje.toLocaleUpperCase();

function mensajeSecreto(nuevo) {    
    let nuevoMensaje = nuevo;
    for(let i = 0; i < nuevo.length; i++){
        if(nuevo[i] === "E"){
            nuevoMensaje = nuevoMensaje.replace("E", "3");
        }
        else if(nuevo[i] === "S"){
            nuevoMensaje = nuevoMensaje.replace("S", "5");
        }
        else if(nuevo[i] === "T"){
            nuevoMensaje = nuevoMensaje.replace("T", "7");
        }
        else if(nuevo[i] === "A"){
            nuevoMensaje = nuevoMensaje.replace("A", "4");
        }
        else if(nuevo[i] === "I"){
            nuevoMensaje = nuevoMensaje.replace("I", "1");
        }
        else if(nuevo[i] === "O"){
            nuevoMensaje = nuevoMensaje.replace("O", "0");
        }
        else {
            nuevoMensaje = nuevoMensaje.replace(i, i);
        }
    }
    return nuevoMensaje;
}
document.getElementById("secreto").textContent = mensajeSecreto(nuevo);
document.getElementById("secreto").style.color = "purple";
document.getElementById("secreto").style.fontSize = "1.7em";
console.log(mensajeSecreto(nuevo));