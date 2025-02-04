{
    tvSamsung = {
        nombre : "TV Samsung 42'",
        categoria : "Television",
        unidades : 4,
        precio : 345.95
    }
    tvSamsung.getImporte = function() {
        let hola = tvSamsung.precio * tvSamsung.unidades;
        return "El precio total de todo es de: " + hola
    }
}

document.getElementById("san").textContent=tvSamsung.getImporte(); //Printamos en el HTML el resultado de la operacion

//Pagina 77
let propiedadesNecesarias = ["resolucion", "smartTV", "puertosHDMI", "marca"];

for (let propiedad of propiedadesNecesarias) {
    if (!(propiedad in tvSamsung)) {
        tvSamsung[propiedad] = "default value";
    }
}

for (let propiedad in tvSamsung) {
    if (typeof tvSamsung[propiedad] !== 'function') {
        let valorUsuario = prompt("Introduce el valor para " + propiedad + " (actual: " + tvSamsung[propiedad] + ")");
        if (valorUsuario !== null && valorUsuario.trim() !== "") {
            tvSamsung[propiedad] = valorUsuario;
        }
    }
}

let infoDiv = document.getElementById("info");
let contenido = "";
for (let propiedad in tvSamsung) {
    if (typeof tvSamsung[propiedad] !== 'function') {
        contenido += `<p><strong>${propiedad}:</strong> ${tvSamsung[propiedad]}</p>`;
    }
}
contenido += `<p><strong>Importe total:</strong> ${tvSamsung.getImporte()}</p>`;
infoDiv.innerHTML = contenido;

console.log(tvSamsung.getImporte());

//Pagina 79
let usuarios = [
    { nombre: "Juan", edad: 25, email: "juan@email.com", saludar: function() { console.log("Hola, soy " + this.nombre); } },
    { nombre: "Maria", edad: 30, email: "maria@email.com", saludar: function() { console.log("Hola, soy " + this.nombre); } },
    { nombre: "Carlos", edad: 28, email: "carlos@email.com", saludar: function() { console.log("Hola, soy " + this.nombre); } }
];

usuarios.push({ nombre: "Ana", edad: 22, email: "ana@email.com", saludar: function() { console.log("Hola, soy " + this.nombre); } });

function mostrarUsuarios() {
    for (let usuario of usuarios) {
        console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
        usuario.saludar();
    }
}

mostrarUsuarios();