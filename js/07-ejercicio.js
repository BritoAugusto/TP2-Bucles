/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/



 const numeroIngresado = parseInt(prompt('Ingrese un número del 1 al 50'));


  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50) {
    document.write("<h3>Ingrese un número válido</h3>");
  }else {
    let resultado = "";
    for (let i = numeroIngresado; i >= 1; i--) {
      let piramide = "";

      for (let j = 1; j <= i; j++) {
        piramide += i;
      }
      resultado += piramide + "<br>";
    }
    document.write(resultado);
  }
