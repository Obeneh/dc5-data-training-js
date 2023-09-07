/*  Écrivez un programme qui affiche les nombres de 1 à 50, mais remplace les multiples de 3 par "Fizz" et les multiples de 5 par "Buzz". */

function FizzBuzz (){
    for (var i = 0 ; i <= 50; i++){
        if (i %3 == 0 ){
            console.log("Fizz")
        } else if (i % 5 ==0 ){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
FizzBuzz()