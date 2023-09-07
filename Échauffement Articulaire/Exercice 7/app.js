/* Écrivez un programme qui affiche un motif en utilisant des boucles imbriquées */

for (var i = 1; i <= 10; i++) {
  var motif = '';
  for (var j = 1; j <= i; j++) {
    motif += 'ø ';
  }
  console.log(motif);
}
