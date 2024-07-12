/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.*/

const nombre1 = prompt('Ingresar un Nombre')
const edad1 = parseInt(prompt('Ingresar la edad de ' + nombre1 + ':'))

const nombre2 = prompt("Ingresar un segundo nombre");
const edad2 = parseInt(prompt("Ingresar la edad de " + nombre2 + ":"))

const nombre3 = prompt("Ingresar un Nombre");
const edad3 = parseInt(prompt("Ingresar la edad de " + nombre3 + ":"))

const mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayor = '';

switch (mayorEdad) {
  case edad1:
    nombreMayor += nombre1;
    break;
  case edad2:
    nombreMayor += nombre2;
    break;
  case edad3:
    nombreMayor += nombre3;
    break;
  default:
    break;
}
document.write(`La persona con mayor edad es: ${nombreMayor} con ${mayorEdad} años`)