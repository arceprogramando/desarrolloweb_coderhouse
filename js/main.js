/*

console.log("Hola");

class SerHumano {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
}

let listanombre = [];
let personas = 2;

for (let i = 0; i < personas; i = i + 1) {
    nombre = prompt("Ingrese un nombre");
    genero = prompt("Ingrese el genero");

}
let persona = new SerHumano(nombre, genero);
listanombre.push(persona);


console.log(persona)


let objeto = {
    nombre :"Jon",
    edad : 35
}

let colores = ["blanco","negro","azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "Arceprogramando@gmail.com";

colores.push("anaranjado");

console.log(objeto);
console.log(colores);


*/

//Cadenas de Texto aka String

let nombre = "Jon";
let apellido = "Mircha";
let saludo = new String("Hola mundo");

console.log(nombre,apellido,saludo);
console.log(nombre.length,apellido.length, saludo.length);

function saludar(){
    console.log(`Hola ${nombre}${apellido} ` );
}

saludar();


