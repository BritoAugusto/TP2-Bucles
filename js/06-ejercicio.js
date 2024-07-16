//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

/*1
22
333
4444
55555
666666
…….*/

let result = '';
for (let i = 1; i <= 30; i++) {
    let piramide = '';
    for (let j = 0; j < i; j++) {
        piramide += i;
    }
    result += piramide + '<br>';
}
document.write(result);