// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt('Ingrese su edad para saber si está apto para conducir o no'))

if (edad >= 18) {
    document.write(`<h2>Usted está habilitado para conducir</h2>`)
}else if (isNaN(edad)) {
    document.write(`<h2>El carácter ingresado no es un número valido</h2>`)
}else {
     document.write(`<h2>Usted no está habilitado para conducir</h2>`)
}