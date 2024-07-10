// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta = "";

do {
    const palabraIngresada = prompt('ingrese una palabra')
    if(palabraIngresada !== null && palabraIngresada  !== ""){
    if (fraseCompleta.length === 0) {
        fraseCompleta = palabraIngresada;
    }else{
      fraseCompleta = fraseCompleta +'-' + palabraIngresada;
}
}

}while (confirm('¿Desea Continuar?'));


document.write(`Frase ingresada: ${fraseCompleta}`);
