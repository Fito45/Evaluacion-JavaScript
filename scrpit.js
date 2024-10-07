let nombre = prompt ("Cual es tu nombre?");
let edad = prompt("que edad tienes?");
let estudiaste = true ;

let saludo = `¡Hola soy ${nombre} y tengo ${edad} años!`;

let si = `¡${nombre} si estudiaste! ¡Pasaras la material! :>`;

let no = `¡${nombre} no estudiaste! ¡Reprobaras la Materia! :<`;

console.log (saludo);

if ( estudiaste >= true) {
    alert (si);
}else {
    alert (no);
}