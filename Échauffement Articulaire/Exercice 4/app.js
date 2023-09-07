/*  Écrivez un programme qui calcule la somme des nombres de 1 à 100 en utilisant une boucle `for`. */

function addition(){
    var x = 0;
    for (var i = 1 ; i <= 100 ; i++){
        x = x + i;
        console.log(x)
    }
    console.log(x + ' est la somme des nombres de 1 à 100');
}
addition()