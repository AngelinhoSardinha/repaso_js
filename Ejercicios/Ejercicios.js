//PAGINA 80

let usuarios = [
    { nombre: "Juan", edad: 25, email: "juan@email.com", saludar: function() { console.log("Hola, soy " + this.nombre); } },
    {nombre: "Maria", edad: 30, email: "mariap@hotmail.es", saludar: function() { console.log("Hola, soy " + this.nombre); } },         {nombre: "Denis", edad: 18, email: "denisitoow@gmail.com", saludar: function() { console.log("Hola, soy " + this.nombre); }}
];

usuarios.push({ nombre: "Ana", edad: 22, email: "Angela@gmail.com" });

function mostrarUsuarios(usuarios){
    for(let usuario of usuarios){
        console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
    }
}

mostrarUsuarios(usuarios);
console.log(usuarios[2].saludar());