//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt('Ingrese un breve texto');
if (texto !== null) {
const vocales = 'aeiouAEIOU'
let contador = 0;
 for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contador++;
    }
 }
     document.write(`El texto ingresado contiene ${contador} vocales`)
}