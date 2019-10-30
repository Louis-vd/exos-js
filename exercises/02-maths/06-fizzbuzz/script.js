/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    for (i=1; i <= 100; i++){ //boucle où i (un chiffre) commence à 1 et tant que i est plus petit ou égal à 100, i est incrémenté
        if(i%3 == 0 && i%5 == 0){
            console.log("fizzbuzz"); //si le chiffre est un multiple de 3 ET un multiple de 5, on affiche dans la console "fizzbuzz"
        }
        else if(i%3 == 0){
            console.log("fizz"); //sinon si le chiffre est un multiple de 3, on affiche dans la console "fizz"
        }
        else if(i%5 == 0){
            console.log("buzz"); //sinon si le chiffre est un multiple de 5, on affiche dans la console "buzz"
        }
        else{
            console.log(i); //si le chiffre ne correspond à aucune des conditions, on affiche dans la console uniquement le chiffre
        }   
    }


    // your code here

})();
