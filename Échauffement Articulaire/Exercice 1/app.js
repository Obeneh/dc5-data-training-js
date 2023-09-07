function  PairorNot(nombre){
    if (nombre%2 ==0){
        console.log(nombre + " est un nombre pair")
    }else{
        console.log(nombre + " est un nombre impair")
    }
}
nombre = parseInt(prompt("Votre nombre s'il vous plait !"))
PairorNot(nombre)