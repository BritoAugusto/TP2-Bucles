// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;

do {
    const numeros = parseInt(prompt('Ingrese un número'))
    if (isNaN(numeros)) {
        alert('Ingrese un número válido')
    }
    else{
        sumaTotal = sumaTotal + numeros;
    }
}while (confirm('¿Desea Continuar?'));

document.write(`<h2>La suma total es de: ${sumaTotal}</h2>`)

// Elegí el bucle do while ya que necesitaba que el bucle se repita al menos una vez