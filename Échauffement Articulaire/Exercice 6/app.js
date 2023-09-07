/* Écrivez un programme qui trouve et affiche les nombres premiers de 1 à 50. */

function NombrePremier(nombre) {
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (var nombre = 1; nombre <= 50; nombre++) {
    if (NombrePremier(nombre)) {
      console.log(nombre);
    }
  }
  