// // 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingrese un número de filas'))
const columnas = parseInt(prompt('Ingrese un número de columnas'))

let totalCeldas = filas * columnas;

document.write(`<table><tbody>`)
    for(let indiceFilas = 1; indiceFilas <= filas; indiceFilas++){      
  document.write(`<tr>`)
for(let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++){
    document.write(`<td>${totalCeldas}</td>`)
    //decrementar
    totalCeldas--; // totalCeldas = totalCeldas -1
}
    document.write(`</tr>`) 
    }
document.write(`</tbody> </table>`)
