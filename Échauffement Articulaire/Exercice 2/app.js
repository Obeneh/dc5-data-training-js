/*Écrivez un programme qui détermine si une année est bissextile ou non.*/

function BissextileOrNot (an){
    if(an % 4 ==0 && an % 100 == 0 || an % 400 == 0 ){
        console.log(an + " est une année bissextile.");
    } else {
      console.log(an + " n'est pas une année bissextile.");
    }
}

an = parseInt(prompt("Votre année svp !"))
BissextileOrNot(an)