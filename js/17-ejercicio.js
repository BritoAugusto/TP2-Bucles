//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt('Ingrese una palabra')

if (texto !== null) {
    const vocales = 'aeiouAEIOU';
    let posicion = -1;
    for (let i = 0; i < texto.length; i++) {
       if (vocales.includes(texto[i])) {
         posicion = i;
        break;
       }
    }
    if (posicion !== -1) {
        
        document.write(`<h3>La primer vocal se encuentra en la posicion número ${posicion}</h3>`)
    }else{
        document.write('<h3>No se encontraron vocales en la palabra ingresada</h3>')
    }
}