//13- Realiza un script que pida un texto y lo muestre en mayúsculas.
do{
const texto = prompt('Ingrese un breve texto')
if (texto !== null) {
    document.write(texto.toUpperCase() + '<br>')
    
}
}while(confirm('¿Desea Continuar?'))