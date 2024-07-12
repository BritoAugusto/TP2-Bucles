/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/


    const numeroIngresado = parseInt(prompt('Ingrese un número del 1 al 50'))
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 50) {
        alert('Ingrese un numero válido')
    }else{
      let resultado = "";
      for (let i = 1; i <= numeroIngresado; i++) {
        let numeros = "";
        for (let j = 1; j <= i; j++) {
          numeros += j + "";
        }
        resultado += numeros + "<br>";
      }
      document.write(resultado);
    }

