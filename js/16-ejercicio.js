//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt('Escriba una cadena de texto')
let resultado = '';
if (texto !== null) {
    resultado = texto.split('').reverse().join('');
    document.write(resultado)
}