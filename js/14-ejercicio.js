//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let fraseCompleta = "";

do {
  const palabraIngresada = prompt("ingrese una palabra");
  if (palabraIngresada !== null && palabraIngresada !== "") {
    if (fraseCompleta.length === 0) {
      fraseCompleta = palabraIngresada;
    } else {
      fraseCompleta = fraseCompleta + "-" + palabraIngresada;
    }
  }
} while (confirm("¿Desea Continuar?"));

document.write(`Frase ingresada: ${fraseCompleta}`);